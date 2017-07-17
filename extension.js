// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    var scrollDownCommand = vscode.commands.registerCommand('onelinescroll.scrollDown', function () {
        // Move cursor oneline down 
        vscode.commands.executeCommand('cursorMove', {
            to: 'down',
            by: 'wrappedLine',
            value: 1,
        });
        vscode.commands.executeCommand('editorScroll', {
            to: 'down',
            by: 'wrappedLine',
            value: 1,
        })
    });

    var scrollUpCommand = vscode.commands.registerCommand('onelinescroll.scrollUp', function () {
        // Move cursor oneline down 
        vscode.commands.executeCommand('cursorMove', {
            to: 'up',
            by: 'wrappedLine',
            value: 1,
        });
        vscode.commands.executeCommand('editorScroll', {
            to: 'up',
            by: 'wrappedLine',
            value: 1,
        })
    });

    context.subscriptions.push(scrollDownCommand);
    context.subscriptions.push(scrollUpCommand);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;