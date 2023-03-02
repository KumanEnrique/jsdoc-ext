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
    let returnText = '';
    text = text.replace(/\s/g, '');
    let lastIndex = text.lastIndexOf(':');
    let lastBrace = text.lastIndexOf(')');
    if (lastIndex > lastBrace) {
        //we have a return type
        //read to end of string
        let index = lastIndex + 1;
        let splicedText = text.slice(index, text.length);
        returnText = splicedText.match(/[a-zA-Z][a-zA-Z0-9$_\\]*/).toString();
    }
    return returnText;
}
/**
 * @param {string} text
 */
function getParameters(text) {
    let paramList = [];
    if (text.charAt(0) === '(') {
        let textClean = text.slice(1).slice(0,text.length-2)
        const params = textClean.split(",")
        for(const param in params){
            const name = params[param].split(":")[0]
            let type = params[param].split(":")[1]
            if (type === "boolean" || type === "number" || type === "string" || type === "[]"){
                // type
            }
            paramList.push(new paramDeclaration(name, type) )
        }
    }
    return paramList;
}
/**
 * @param {string} text
 */
function getFunctionName(text) {
    let matches = /function\s+([\w_-]+)/.exec(text);
    let functionName = matches[1];
    return functionName;
}
/**
 * @param {any[]} paramList
 * @param {string} returnText
 * @param {string} functionName
 */
function getComment(paramList, returnText, functionName) {
    let textToInsert = "";
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
    let fullLine = selectedText;
    let firstBraceIndex = selectedText.indexOf('(');
    selectedText = selectedText.slice(firstBraceIndex);

    let returnText = getReturns(selectedText);
    let params = getParameters(selectedText);
    let functionName = getFunctionName(fullLine);
    let textToInsert = getComment(params, returnText, functionName);
    return textToInsert;
}
exports.comment = comment;
console.log(comment("function employee(id:number,name:[])") )
// console.log(comment("function sas(string $asff,$dfxx)") )