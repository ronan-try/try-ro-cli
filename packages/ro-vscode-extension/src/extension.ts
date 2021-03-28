// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// demo
import { existGitRepo, gitBranchCurrent, gitLocalOriginURI } from '@ro/cli-service';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "ro-vscode-extension" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('ro-vscode-extension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello -' + 100);

    const folders = vscode.workspace.workspaceFolders;
    vscode.window.showInformationMessage('Hello --' + folders?.length);

    if (Array.isArray(folders) && folders.length > 0) {
  		vscode.window.showInformationMessage('Hello ' + folders[0].uri.fsPath);
    }
	
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
