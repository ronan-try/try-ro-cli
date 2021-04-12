import * as vscode from 'vscode';
import ReactPanel from './ReactPanel';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "ro-vscode-extension" is now active!');

	let disposable = vscode.commands.registerCommand('ro-vscode-extension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello: Here is @ro/cli !');

		const folders = vscode.workspace.workspaceFolders;
		vscode.window.showInformationMessage('Hello --' + folders?.length);

		if (Array.isArray(folders) && folders.length > 0) {
			vscode.window.showInformationMessage('Hello ' + folders[0].uri.fsPath);
		}

	});
	context.subscriptions.push(disposable);

	let openWebview = vscode.commands.registerCommand('ro-vscode-extension.exampleOpenWebview', () => {
		const panel = vscode.window.createWebviewPanel(
			'openWebview',
			'@ro/cli: Example Page',
			vscode.ViewColumn.One,
			{
				enableScripts: true,
			}
		);

		panel.webview.html = getWebviewContent();
	});
	context.subscriptions.push(openWebview);

	let reactview = vscode.commands.registerCommand('ro-vscode-extension.startReactWebview', () => {
		ReactPanel.createOrShow(context.extensionUri, context.extensionPath);
	});
	context.subscriptions.push(reactview);
}

// this method is called when your extension is deactivated
export function deactivate() { }

function getWebviewContent() {
	return `
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="with=device-width, initial-scale=1.0">
				<title>Example Webview</title>
				<script src="https://dss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/jquery/jquery-1.10.2.min_65682a2.js"></script>
			</head>
			<body>
				<h1> This works! </h1>
				add some custom HTML here.

				<script>
					(() => {
						console.log(Date.now());
						console.warn(jQuery);
						console.log(jQuery('h1'));
					})();
				</script>
			</body>
		</html>
	`;
}
