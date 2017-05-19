// Fonte: https://www.npmjs.com/package/node-rest-client

'use strict';
var http = require('http');
var port = process.env.PORT || 1338;

http.createServer(function (req, res) {
    var Client = require('node-rest-client').Client;
    var client = new Client();
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    var args = {
        data: { name: "mais um teste em node" },
        headers: { "Content-Type": "application/json" }
    };

    //client.put("http://localhost:1337/tasks/591f44a099bd562f746c01ea", args, function (data, response) {
    //});

    //client.delete("http://localhost:1337/tasks/591f4abe99bd562f746c01f6", function (data, response) {
    //});

    client.post("http://localhost:1337/tasks/", args, function (data, response) {

        client.get("http://localhost:1337/tasks/", function (data, response) {
            res.end(JSON.stringify(data));
        });

    });

}).listen(port);



