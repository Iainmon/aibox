class aibox {

    boot() {
        this.server = require('../app/server.js');
        this.bridge = require('../app/bridge.js');
        this.hardware = require('../app/hardware.js');
    }

    init() {
        this.server.init();
        this.bridge.init();
        this.hardware.init();
    }

    start() {
        this.server.start();
        this.bridge.start();
        this.hardware.start();
    }

    turnoff() {
        this.hardware.shutdown();
    }
}

module.exports = aibox;