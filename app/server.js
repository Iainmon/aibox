const http = require('http');
const util = require("util");
const ejs = require('ejs');
const fs = require('fs');

class Server {
    static init() {

    }

    static view(path) {
        let template = ejs.compile(fs.readFileSync('./app/views/' + path, 'utf8'), {hello : 'wow'});
        return template({hello : 'wow'});
    }


    static router(request) {
        var response = {};

        switch (request.method) {
            case 'GET':
                let urlParams = request.url.split('/');
                console.log(urlParams);
                if (urlParams[1] === 'remote') {
                    response = Server.routes[0].controller(request);
                } else {
                    response.code = 404;
                    response.content = '';
                }
                break;

            default:
                response.code = 404;
                response.content = 'none';
        }

        //console.log(request.method);

        return response;
    }

    static start() {
        http.createServer(function (req, res) {
            let response = Server.router(req);
            res.writeHead(response.code);
            res.end(response.content);
        }).listen(9000);
    }
}

Server.controllers = {
    remote : function (request) {
        return {
            code : 200,
            content : Server.view('main.ejs')
        }
    }
};

Server.routes = [
    {
        method : 'get',
        uri : 'remote',
        controller : Server.controllers.remote
    }
];

module.exports = Server;