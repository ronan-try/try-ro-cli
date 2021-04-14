import * as vscode from 'vscode';

const command = vscode.commands.registerCommand('ro-cli-vscode-extension.mr', () => {
  vscode.window.showInformationMessage('Hello World from @ro/cli-vscode-extension!');
});

export default command;
