const bootpath = '../examples/events/';

class Delegate {

    static boot() {
        this.userevents = require(bootpath + 'events.js');
        this.userevents.scripts.forEach( (script) => script.boot() );
    }

    static init() {
        this.userevents.scripts.forEach( (script) => script.init() );
    }

    static start() {
        this.userevents.scripts.forEach( (script) => script.start() );
    }

}

module.exports = Delegate;