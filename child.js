module.exports = infanticide;

function infanticide(child) {
   function exitHandler(options, exitCode) {
        //Cleanup the LiveReloadServer
        if (exitCode || exitCode === 0) {
            console.log(exitCode);
        }
        child.kill('SIGTERM')
    }
    
    [
        'exit', // app is closing "SIGTERM"
        'SIGINT', // crtl-c
        'uncaughtException',
        //"kill pid" (ex: nodemon restart)
        'SIGUSR1',
        'SIGUSR2'
    ].map(signal=>process.on(signal, exitHandler.bind(null,{exit:true})));
}   
