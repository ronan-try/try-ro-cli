import * as vscode from 'vscode';
import registerCommands from './registerCommands';

export function activate(context: vscode.ExtensionContext) {
	registerCommands(context);
}

// this method is called when your extension is deactivated
export function deactivate() {}
