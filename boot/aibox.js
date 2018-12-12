class aibox {

    boot() {
        this.server = require('../app/server.js');
        this.bridge = require('../app/bridge.js');
    }

    init() {
        this.server.init();
        this.bridge.init();
    }

    start() {
        this.server.start();
        this.bridge.start();
    }
}

module.exports = aibox;