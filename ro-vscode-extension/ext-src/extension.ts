import * as vscode from 'vscode';
import ReactPanel from './ReactPanel';
import { GitExtension } from '../build-in/vscode.git/git';

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

	let roMr = vscode.commands.registerCommand('ro-vscode-extension.roMr', async () => {
		const folders = vscode.workspace.workspaceFolders;
		
		if (!Array.isArray(folders)) {
			vscode.window.showErrorMessage('ro mr 没有监听到有效的路径-0');
			return;
		}
		if (folders.length < 1) {
			vscode.window.showErrorMessage('ro mr 没有监听到有效的路径-1');
			return;
		}
		const curWorkingPath = folders[0].uri.fsPath;
		vscode.window.showInformationMessage('ro mr: ', curWorkingPath);
		const gitExtension = vscode.extensions.getExtension<GitExtension>('vscode.git').exports;
		const git = gitExtension.getAPI(1);

		try {
			const remotes = git.getRepository(folders[0].uri).state.remotes;
			vscode.window.showInformationMessage('ro mr: ' + remotes.length);
		} catch (error) {
			console.warn(error);
		}


		// const curBranchName = await gitBranchCurrent(curWorkingPath);

	// 	const originUrl = await gitLocalOriginURI(curWorkingPath);
	// 	const url =
	// 		`${originUrl}`
	// 			.replace('.com:', '.com/')
	// 			.replace('git@', 'https://')
	// 			.replace('.git', '/merge_requests/new?')
	// 		+ 'merge_request%5Bsource_branch%5D='
	// 		+ curBranchName;
		const url = 'https://www.baidu.com';
		vscode.window.showInformationMessage('ro mr: ', url);
		vscode.env.openExternal(vscode.Uri.parse(url));
	});
	context.subscriptions.push(roMr);
}

// this method is called when your extension is deactivated
export function deactivate() { }

function getWebviewContent() {
	return ddd();
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

function ddd() {
	return `
	<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
		<base href="http://localhost:3000" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  	<script src="/static/js/bundle.js"></script><script src="/static/js/vendors~main.chunk.js"></script><script src="/static/js/main.chunk.js"></script></body>
</html>
`;
}