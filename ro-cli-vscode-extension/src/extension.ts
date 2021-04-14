import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	{
		let disposable = vscode.commands.registerCommand('ro-cli-vscode-extension.helloWorld', () => {
			vscode.window.showInformationMessage('Hello World from @ro/cli-vscode-extension!');
		});
	
		context.subscriptions.push(disposable);
	}

	{
		let disposable = vscode.commands.registerCommand('ro-cli-vscode-extension.mr', () => {
			vscode.window.showInformationMessage('mr from @ro/cli-vscode-extension!');
		});
	
		context.subscriptions.push(disposable);
	}
}

// this method is called when your extension is deactivated
export function deactivate() {}
