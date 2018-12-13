const events = [
    {
        name : 'example-event', //event name
        channel : 55,
        call : function () {
            console.log('My event has been called!');
        }
    }
];

// See API docs for API function reference.
const scripts = [
    {
        boot : function () {
            // All require statements and file reading must be called in the boot method.

            this.imports.Thread = require('async-threading');
        },
        init : function () {
            // All setup actions must happen in the initialisation method.

            this.tasks.myTask = new this.imports.Thread( () => this.actions.myAction1() , (1000) );
        },
        start : function () {
            // Any other setup or start code here. Warning: do not use loops in the start method.
            // This is only for code to be executed before the web socket is started.

        },

        imports : {},
        tasks : {},

        actions : {
            myAction1 : function () {
                console.log('action 1 executed');
            },
            myAction2 : function () {

            }
        }
    }
];

// Don't edit any lines after this!
module.exports = {
    scripts : scripts,
    events : events
};