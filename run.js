let app = require('./boot/aibox.js');
let Func = require('./lib/Func.js');

var aibox = new app;

Func.timeProcess('Booting', () => aibox.boot());
Func.timeProcess('Initializing', () => aibox.init());
Func.timeProcess('Starting', () => aibox.start());

let serverinfo = aibox.server.httpserver.address();
Func.print(`Listening on ${(serverinfo.address === '::') ? 'localhost' : serverinfo.address}:${serverinfo.port}`);

Func.print('Sitting and waiting...');
