import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	{
		let disposable = vscode.commands.registerCommand('ro.helloWorld2', () => {
			vscode.window.showInformationMessage('Hello World Ro Cli');
		});
		context.subscriptions.push(disposable);
	}

	{
		let openWebview = vscode.commands.registerCommand('ro.exampleWebView', () => {
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
	}

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
