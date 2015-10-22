module.exports = infanticide;

function infanticide(child, signal, parent) {
  signal = signal || "SIGTERM";
  parent = parent || process;

  parent.on(signal, function onexit(){
    parent.removeListener(signal, onexit);
    child.kill(signal);
    process.exit();
  });
}
