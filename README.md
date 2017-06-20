# kill-on-exit

Makes sure child processes are cleaned up (killed) when the parent process exits.

## Install

```shell
npm install kill-on-exit --save
```

## Use

```js
var spawn = require("child_process").spawn;
var killOnExit = require("kill-on-exit");

var child = spawn("long-process");
killOnExit(child);
```

## License

BSD 2 Clause
