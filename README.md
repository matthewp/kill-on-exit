# infanticide

Makes sure child processes are cleaned up (killed) when the parent process exits.

## Install

```shell
npm install infanticide --save
```

## Use

```js
var spawn = require("child_process").spawn;
var killOnExit = require("infanticide");

var child = spawn("long-process");
killOnExit(child);
```

## License

BSD 2 Clause
