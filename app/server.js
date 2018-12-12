const http = require('http');
const util = require("util");
const ejs = require('ejs');
const fs = require('fs');
const Func = require('../lib/Func.js');

class Server {
    static init() {
        Server.views.main = fs.readFileSync('./app/views/main.ejs', 'utf8');
        Server.views.error = fs.readFileSync('./app/views/404.ejs', 'utf8');

        this.httpserver = http.createServer(function (req, res) {
            let response = Server.router(req);
            res.writeHead(response.code);
            res.end(response.content);
        });
    }

    static view(path) {
        let template = ejs.compile(fs.readFileSync('./app/views/' + path, 'utf8'), {});
        return template({code : 200});
    }

    static router(request) {
        var response = {};

        switch (request.method) {
            case 'GET':
                let urlParams = request.url.split('/');
                if (urlParams[1] === 'remote') {
                    response = Server.routes[0].controller(request);
                } else {
                    response.code = 404;
                    response.content = ejs.compile(Server.views.error,{})({code : 404});
                }
                break;

            default:
                response.code = 404;
                response.content = 'none';
        }

        return response;
    }

    static start() {
        Server.httpserver.listen(9000);
    }
}

Server.controllers = {
    remote : function (request) {
        return {
            code : 200,
            content : ejs.compile(Server.views.main,{})({code : 200})
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

Server.views = {};

module.exports = Server;