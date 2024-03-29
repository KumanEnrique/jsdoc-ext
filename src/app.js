class paramDeclaration{
    /**
     * @param {string} paramName
     * @param {string} paramType
     */
    constructor(paramName, paramType) {
        this.paramName = paramName;
        this.paramType = paramType;
        this.paramName = paramName;
        this.paramType = paramType;
    }
}
/**
 * @param {string} text
 */
function getReturns(text){
    let returnText = ""
    const parenthesis = text.indexOf(")")
    if(text[parenthesis + 1] == ":"){
        const beginReturn = parenthesis + 1
        const beginBody = text.indexOf("{")
        returnText = text.slice(beginReturn + 1,beginBody)
        returnText = returnText.trim()
        return returnText
    }else{
        return "void"
    }
}
/**
 * @param {string} text
 */
function getParameters(text) {
    let paramList = [];
    let endParenthesis = text.slice(0,text.indexOf(")") + 1)
    let paraa = endParenthesis.slice(1,-1).split(",")
    if(paraa[0] != ""){
        for (let param in paraa){
            if(paraa[param].includes(":") ){
                const type = paraa[param].split(":")[1]
                const name = paraa[param].split(":")[0]
                paramList.push(new paramDeclaration(name,type))
            }else{
                const name = paraa[param]
                paramList.push(new paramDeclaration(name,null))
            }
        }
    }else{
        paraa
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
    textToInsert = textToInsert + '/**\n * @ ' + functionName + '\n *\n *';

    paramList.forEach(function (element) {
        if (element.paramName != '' && element.paramType) {
            textToInsert = textToInsert + ' @param ';
            textToInsert = textToInsert + '{' + element.paramType + '}' + ' ';
            textToInsert = textToInsert + element.paramName + ' description\n' + ' *';
        }else{
            textToInsert = textToInsert + ' @param ';
            textToInsert = textToInsert + '{any}' + ' ';
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