const app = require('./src/app')
const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Congratulations, your extension "tsdocu" is now active!');
	let disposable = vscode.commands.registerCommand('tsdocu.TsDoc', function () {
        let lang = vscode.window.activeTextEditor.document.languageId;
        if (lang == "javascript" || lang == "typescript") {
            let selection = vscode.window.activeTextEditor.selection;
            let startLine = selection.start.line;
            let selectedText = vscode.window.activeTextEditor.document.lineAt(startLine).text;

            let textToInsert = '';
            if (/function\s+([\w_-]+)\((\w+\:\w+(\,)*)*\)|\((\w+(\,)*)*\)(\:\w+)*/.exec(selectedText) != null) {
                textToInsert = app.comment(selectedText);
            }  else {
                vscode.window.showInformationMessage('Please select a javascript signature or typescript');
                return;
            }

            vscode.window.activeTextEditor.edit(function (editBuilder) {
                startLine--;
                if (startLine < 0) {
                    startLine = 0;
                    textToInsert = textToInsert + '\n';
                }

                let lastCharIndex = vscode.window.activeTextEditor.document.lineAt(startLine).text.length;
                let pos;

                if ((lastCharIndex > 0) && (startLine != 0)) {
                    pos = new vscode.Position(startLine, lastCharIndex);
                } else {
                    pos = new vscode.Position(startLine, 0);
                }

                textToInsert = '\n' + textToInsert;

                let line = vscode.window.activeTextEditor.document.lineAt(selection.start.line).text;
                let firstNonWhiteSpace = vscode.window.activeTextEditor.document.lineAt(selection.start.line).firstNonWhitespaceCharacterIndex;
                let stringToIndent = '';
                for (let i = 0; i < firstNonWhiteSpace; i++) {
                    if (line.charAt(i) == '\t') {
                        stringToIndent = stringToIndent + '\t';
                    } else if (line.charAt(i) == ' ') {
                        stringToIndent = stringToIndent + ' ';
                    }
                }
                textToInsert = textToInsert.replace(/^/gm, stringToIndent);
                editBuilder.insert(pos, textToInsert);
            })
        }
        console.log('fin de la extencion')
    });

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
} 
