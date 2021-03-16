const A = require('workspace-a');

(() => {
  console.group('This is in workspace-b');

  A.helloA();

  console.groupEnd();
})();