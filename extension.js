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
	let disposable = vscode.commands.registerCommand('tsdocu.helloWorld', function () {
        var lang = vscode.window.activeTextEditor.document.languageId;
        if (lang == "javascript" || lang == "typescript") {
            var selection = vscode.window.activeTextEditor.selection;
            var startLine = selection.start.line;
            var selectedText = vscode.window.activeTextEditor.document.lineAt(startLine).text;

            var textToInsert = '';
            if (/function\s+([\w_-]+)/.exec(selectedText) != null) {
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

                var lastCharIndex = vscode.window.activeTextEditor.document.lineAt(startLine).text.length;
                var pos;

                if ((lastCharIndex > 0) && (startLine != 0)) {
                    pos = new vscode.Position(startLine, lastCharIndex);
                } else {
                    pos = new vscode.Position(startLine, 0);
                }

                textToInsert = '\n' + textToInsert;

                var line = vscode.window.activeTextEditor.document.lineAt(selection.start.line).text;
                var firstNonWhiteSpace = vscode.window.activeTextEditor.document.lineAt(selection.start.line).firstNonWhitespaceCharacterIndex;
                var stringToIndent = '';
                for (var i = 0; i < firstNonWhiteSpace; i++) {
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
    });

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
