const readline = require('readline');

class handleIO {
    rl;
    algoName; 
    inputInstructions; 
    exitInstrucitons;
    constructor({algoName, inputInstructions, exitInstrucitons}) {

        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.algoName = algoName;
        this.inputInstructions = inputInstructions;
        this.exitInstrucitons = exitInstrucitons;
        this.printConsole(algoName, inputInstructions, exitInstrucitons);
    }

    printConsole() { 
        console.log(`-----------------${ this.algoName }-------------`);
        console.log(this.inputInstructions);
        console.log(this.exitInstrucitons);
    }

    parseValue(cb) {
        this.rl.on('line', (ln) => {
            if (cb) {
                return cb(ln.split(" "), ln);
            }
            return ln.split(" ");
        })
    };
}

module.exports = handleIO;