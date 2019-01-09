class Winery {
    constructor() {
        this.scripts = {
            app : {
                name : 'app',
                startText : 'Building and running test.cpp',
                run: function (params) {

                    var spawn = require('child_process').spawnSync;
                    spawn('sh', ['winery/recipes/run.sh'], { stdio: 'inherit' });
                    
                }
            },
        };
    }
    action(args) {
        if (args[0] === 'run') return this.scripts.app;
    }
}
 module.exports = Winery;