let app = require('./boot/aibox.js');
let Func = require('./lib/Func.js');

var aibox = new app;

Func.timeProcess('Booting', () => aibox.boot());
Func.timeProcess('Initializing', () => aibox.init());
Func.timeProcess('Starting', () => aibox.start());

Func.print('Sitting and waiting...');

