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
    textToInsert = `${textToInsert}/**\n * @function ${functionName} description\n *\n *`;

    paramList.forEach(function (element) {
        if (element.paramName != '' && element.paramType) {
            textToInsert += `@name ${element.paramName} description @param {${element.paramType}} ${element.paramName}\n *`;
        }else{
            textToInsert += ` @name ${element.paramName} description @param {any} ${element.paramName}\n *`;
        }
    });
    if (returnText == '') {
        returnText = '{void}';
        textToInsert += ` @returns ${returnText} description \n */`
    }else{
        textToInsert += ` @returns {${returnText}} description \n */`
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
/* console.log(comment(`function xx(id:string,name:number):string {this.id = id;this.name = name;return "";}`) )
console.log(comment(`function sa(id:string,name:boolean) {this.id = id;this.name = name;return "";}`) )
console.log(comment(`function cc(gf,jj) {this.id = id;this.name = name;return "";}`) )
console.log(comment(`function jj() {this.id = id;this.name = name;return "";}`) ) */