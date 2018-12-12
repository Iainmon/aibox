var micros = require('microseconds');

class Func {
    static print(msg) {
        console.log(msg);
    }
    static timeProcess(name, exec) {
        let stime = micros.now();
        exec();
        let etime = micros.now();
        let dtime = etime - stime;
        Func.print(name + ' took ' + micros.parse(dtime));
    }
}

module.exports = Func;