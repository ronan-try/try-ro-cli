import * as vscode from 'vscode';

import { GitExtension } from '../builted-in/vscode.git/git';

const command = vscode.commands.registerCommand('ro-cli-vscode-extension.mr', () => {
  const folders = vscode.workspace.workspaceFolders;
  if (!Array.isArray(folders)) {
    vscode.window.showErrorMessage('ro mr 没有监听到有效的路径-0');
    return;
  }
  if (folders.length < 1) {
    vscode.window.showErrorMessage('ro mr 没有监听到有效的路径-1');
    return;
  }

  const curFolder = folders[0] as vscode.WorkspaceFolder;

  const gitExtension = vscode.extensions.getExtension<GitExtension>('vscode.git')?.exports;
  const git = gitExtension?.getAPI(1);

  const state = git?.getRepository(curFolder.uri)?.state;
  
  vscode.window.showInformationMessage('remotes: ' + state?.remotes.length);
});

export default command;
