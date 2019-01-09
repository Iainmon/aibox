const SerialPort = require("serialport").SerialPort;

class Hardware {

    static init(options) {
        this.devicePort = options.devicePort;
        this.serialport = new SerialPort(this.devicePort); // default "/dev/tty.usbmodem1421"
    }

    static start() {
        this.serialport.on('open', function() {
            console.log('Serial Port Opened on ' + this.devicePort);
            this.serialport.on('data', function(data) {
                console.log(data[0]);
            });
        });
    }
    
    static shutdown() {

    }

}

module.exports = Hardware;