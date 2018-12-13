class aibox {

    boot() {
        this.server = require('../app/server.js');
        this.bridge = require('../app/bridge.js');
        this.hardware = require('../app/hardware.js');

        this.delegate = require('../app/delegate.js');
        this.delegate.boot();
    }

    init() {
        this.server.init();
        this.bridge.init();
        this.hardware.init();
        this.delegate.init();
    }

    start() {
        this.server.start();
        this.bridge.start();
        this.hardware.start();
        this.delegate.start();
    }

    turnoff() {
        this.hardware.shutdown();
    }
}

module.exports = aibox;