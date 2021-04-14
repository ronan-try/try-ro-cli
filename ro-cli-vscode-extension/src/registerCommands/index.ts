import * as vscode from 'vscode';

import HelloWorld from './helloWorld';
import Mr from './mr';

export default function factory (context: vscode.ExtensionContext) {
  context.subscriptions.push(HelloWorld);
  context.subscriptions.push(Mr);
};

