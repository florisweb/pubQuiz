#!/usr/bin/env node
var WebSocketServer = require('websocket').server;
var http = require('http');
 
var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});
server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});
 
wsServer = new WebSocketServer({
    httpServer: server,
    // You should not use autoAcceptConnections for production
    // applications, as it defeats all standard cross-origin protection
    // facilities built into the protocol and the browser.  You should
    // *always* verify the connection's origin and decide whether or not
    // to accept it.
    autoAcceptConnections: false
});
 
function originIsAllowed(origin) {
    if (origin != "http://localhost" && origin != "http://192.168.178.23") return false;
    return true;
}


let Clients = [];
Clients.removeClient = function(_id) {
    for (let i = 0; i < this.length; i++)
    {
        if (this[i].id != _id) continue;
        this.splice(i, 1);
        return true;
    }
    return false;
};
Clients.findController = function(_key) {
    for (client of this)
    {
        if (client.type != "controller") continue;
        if (!client.enabled) continue;
        if (client.key != _key) continue;
        return client;
    }
    return false;
}



 
wsServer.on('request', function(request) {
    if (!originIsAllowed(request.origin)) {
      // Make sure we only accept requests from an allowed origin
      request.reject();
      console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
      return;
    }

    var connection = request.accept('pubquiz-protocol', request.origin);
    
    let Client = new _Client(connection);
    Clients.push(Client);

    console.log((new Date()) + ' Connection accepted. From ' + request.origin);
    Client.connection.on('message', function(message) {
        if (message.type !== 'utf8') return Client.send(JSON.stringify({error: "This encoding is not supported."}));
        let clientData = JSON.parse(message.utf8Data);

        if (!Client.enabled) return Client.enable(clientData);
        if (Client.type != "controller" || !Client.screenClients.length) return;
        
        for (client of Client.screenClients) client.send(JSON.stringify(clientData));
    });

    
    Client.connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
        Clients.removeClient(Client.id);
    });
});




function _Client(_connection) {
    this.id         = newId();
    this.enabled    = false;
    this.type       = false;
    this.connection = _connection;

    this.screenClients = [];

    this.enable = function(_data) {
        let clientType = _data.type;
        switch (clientType) 
        {
            case "displayer": 
                this.type = "displayer";
                let controller = Clients.findController(_data.key);
                if (!controller) return this.send(JSON.stringify({error: "Controller not found"}));
                this.controller = controller;
                this.controller.screenClients.push(this);

                this.send(JSON.stringify({connectionStatus: "OK", x: controller.id}));
                this.controller.send(JSON.stringify({message: "A displayer connected", id: this.id}));
            break;
            case "controller": 
                this.type = "controller";
                this.key = Math.round(Math.random() * 100000);
                this.send(JSON.stringify({connectionStatus: "OK", key: this.key}));
            break;
            default: return false; break;
        }

        this.enabled = true;
    }

    this.send = function(_str) {
        this.connection.sendUTF(_str);
    }
}


function newId() {return parseInt(Math.round(Math.random() * 100000000) + "" + Math.round(Math.random() * 100000000));}

