

	// let reactview = vscode.commands.registerCommand('ro.startReactWebview', () => {
	// 	ReactPanel.createOrShow(context.extensionUri, context.extensionPath);
	// });
	// context.subscriptions.push(reactview);

	// let roMr = vscode.commands.registerCommand('ro.mr', async () => {
	// 	const folders = vscode.workspace.workspaceFolders;
		
	// 	if (!Array.isArray(folders)) {
	// 		vscode.window.showErrorMessage('ro mr 没有监听到有效的路径-0');
	// 		return;
	// 	}
	// 	if (folders.length < 1) {
	// 		vscode.window.showErrorMessage('ro mr 没有监听到有效的路径-1');
	// 		return;
	// 	}
	// 	const curWorkingPath = folders[0].uri.fsPath;
	// 	vscode.window.showInformationMessage('ro mr: ', curWorkingPath);
	// 	const gitExtension = vscode.extensions.getExtension<GitExtension>('vscode.git')?.exports;
	// 	const git = gitExtension?.getAPI(1);
	// 	if (git === void 0) {
	// 		vscode.window.showErrorMessage('ro mr git -1');
	// 		return;
	// 	}

	// 	try {
	// 		const remotes = git.getRepository(folders[0].uri)?.state.remotes;
	// 		if (!Array.isArray(remotes)) {
	// 			vscode.window.showErrorMessage('ro mr git -1');
	// 			return;
	// 		}
	// 		vscode.window.showInformationMessage('ro mr: ' + remotes.length);
	// 	} catch (error) {
	// 		console.warn(error);
	// 	}


	// 	// const curBranchName = await gitBranchCurrent(curWorkingPath);

	// // 	const originUrl = await gitLocalOriginURI(curWorkingPath);
	// // 	const url =
	// // 		`${originUrl}`
	// // 			.replace('.com:', '.com/')
	// // 			.replace('git@', 'https://')
	// // 			.replace('.git', '/merge_requests/new?')
	// // 		+ 'merge_request%5Bsource_branch%5D='
	// // 		+ curBranchName;
	// 	const url = 'https://www.baidu.com';
	// 	vscode.window.showInformationMessage('ro mr: ', url);
	// 	vscode.env.openExternal(vscode.Uri.parse(url));
	// });
	// context.subscriptions.push(roMr);








