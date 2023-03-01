var paramDeclaration = (function () {
    /**
     * @param {string} paramName
     * @param {string} paramType
     */
    function paramDeclaration(paramName, paramType) {
        this.paramName = paramName;
        this.paramType = paramType;
        this.paramName = paramName;
        this.paramType = paramType;
    }
    return paramDeclaration;
})();
/**
 * @param {string} text
 */
function getReturns(text) {
    var returnText = '';
    text = text.replace(/\s/g, '');
    var lastIndex = text.lastIndexOf(':');
    var lastBrace = text.lastIndexOf(')');
    if (lastIndex > lastBrace) {
        //we have a return type
        //read to end of string
        var index = lastIndex + 1;
        var splicedText = text.slice(index, text.length);
        returnText = splicedText.match(/[a-zA-Z][a-zA-Z0-9$_\\]*/).toString();
    }
    return returnText;
}
/**
 * @param {string} text
 */
function getParameters(text) {
    var paramList = [];
console.log(text)
    if (text.charAt(0) === '(') {
        var keys = text.match(/\$[\w_-]+/g);
        console.log(keys)
        var i = 0;
        for (const key in keys) {
            if (keys.hasOwnProperty(key)) {
                const name = keys[key];
                var clean = text
                    .substring(1, text.indexOf(')'))
                    .split(',')[i]
                    .trim()
                    .split(/\s/g)[0];
                var type = '';
                if (clean === 'string' || 
                    clean === 'int'    || 
                    clean === 'float'  ||
                    clean === 'bool'   || 
                    clean === 'array') {
                        type += clean;
                } else {
                    type = 'any';
                }
                paramList.push(new paramDeclaration(name, type));
            }
            i++;
        }
    }
    return paramList;
}
/**
 * @param {string} text
 */
function getFunctionName(text) {
    var matches = /function\s+([\w_-]+)/.exec(text);
    var functionName = matches[1];
    return functionName;
}
/**
 * @param {any[]} paramList
 * @param {string} returnText
 * @param {string} functionName
 */
function getComment(paramList, returnText, functionName) {
    var textToInsert = "";
    textToInsert = textToInsert + '/**\n * ' + functionName + '\n *\n *';

    paramList.forEach(function (element) {
        if (element.paramName != '') {
            textToInsert = textToInsert + ' @param ';
            textToInsert = textToInsert + '{' + element.paramType + '}' + ' ';
            textToInsert = textToInsert + element.paramName + ' description\n' + ' *';
        }
    });
    if (returnText == '') {
        returnText = '{void}';
        textToInsert = textToInsert + ' @returns ' + returnText + ' description\n' + ' */';
    }else{
        textToInsert = textToInsert + ' @returns {' + returnText + '}  description\n' + ' */';
    }
    return textToInsert;
}
/**
 * @param {string} selectedText
 */
function comment(selectedText) {
    var fullLine = selectedText;
    var firstBraceIndex = selectedText.indexOf('(');
    selectedText = selectedText.slice(firstBraceIndex);

    var returnText = getReturns(selectedText);
    var params = getParameters(selectedText);
    var functionName = getFunctionName(fullLine);
    var textToInsert = getComment(params, returnText, functionName);
    console.log("comment")
    return textToInsert;
}
exports.comment = comment;
// console.log(comment("function employee(id:number,name:string)") )
// console.log(comment("function sas(string $asff,$dfxx)") )