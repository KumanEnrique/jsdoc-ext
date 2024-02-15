const app = require('./src/app')
const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Congratulations, your extension "tsdocu" is now active!');
	// let disposable = vscode.commands.registerCommand('tsdocu.helloWorld', function () {
	// 	vscode.window.showInformationMessage('Hello World from tsdocu!');
	// });
	let disposable = vscode.commands.registerCommand('tsdocu.TsDoc', function () {
        let lang = vscode.window.activeTextEditor.document.languageId;
        // console.log({lang})
        if (lang == "javascript" || lang == "typescript") {
            let selection = vscode.window.activeTextEditor.selection;
            // console.log({selection})
            let startLine = selection.start.line;
            // console.log({startLine})
            let selectedText = vscode.window.activeTextEditor.document.lineAt(startLine).text;

            // console.log({selectedText})
            let textToInsert = '';
            if (/function \w+\((?:(\w+)(?:\s=\s'[^']*')?|(?:\w+)?(?:\s=\s\w+)?|\[(\w+)\]|\{(\w+)\}|\.{3}(\w+))(?:,\s(?:(\w+)(?:\s=\s'[^']*')?|(?:\w+)?(?:\s=\s\w+)?|\[(\w+)\]|\{(\w+)\}|\.{3}(\w+)))*\)(\: \w*)* \{/.exec(selectedText) != null) {
                textToInsert = app.comment(selectedText);
                // console.log({textToInsert})
            }  else {
                vscode.window.showInformationMessage('Please select a javascript signature or typescript');
                return;
            }

            vscode.window.activeTextEditor.edit(function (editBuilder) {
                startLine--;
                // console.log({startLine})
                if (startLine < 0) {
                    startLine = 0;
                    // console.log({startLine})
                    textToInsert = textToInsert + '\n';
                    // console.log({textToInsert})
                }

                let lastCharIndex = vscode.window.activeTextEditor.document.lineAt(startLine).text.length;
                // console.log({lastCharIndex})
                let pos;

                if ((lastCharIndex > 0) && (startLine != 0)) {
                    pos = new vscode.Position(startLine, lastCharIndex);
                    // console.log({pos})
                } else {
                    pos = new vscode.Position(startLine, 0);
                    // console.log({pos})
                }

                textToInsert = '\n' + textToInsert;
                // console.log({textToInsert})

                let line = vscode.window.activeTextEditor.document.lineAt(selection.start.line).text;
                // console.log({line})
                let firstNonWhiteSpace = vscode.window.activeTextEditor.document.lineAt(selection.start.line).firstNonWhitespaceCharacterIndex;
                // console.log({firstNonWhiteSpace})
                let stringToIndent = '';
                for (let i = 0; i < firstNonWhiteSpace; i++) {
                    if (line.charAt(i) == '\t') {
                        stringToIndent = stringToIndent + '\t';
                        // console.log({stringToIndent})
                    } else if (line.charAt(i) == ' ') {
                        stringToIndent = stringToIndent + ' ';
                        // console.log({stringToIndent})
                    }
                }
                textToInsert = textToInsert.replace(/^/gm, stringToIndent);
                // console.log({textToInsert})
                editBuilder.insert(pos, textToInsert);
            })
        }
        console.log('fin de la extencion')
    });

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
} 
