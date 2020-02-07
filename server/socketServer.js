#!/usr/bin/env node

const WebSocket = require('ws');
const fs = require('fs');
const https = require('https');






const DOMAIN = "pubquiz.ga";
const PORT = 8080;
const ALLOWED_ORIGINS = ["https://pubquiz.ga", "http://localhost"];
const KEY_LENGTH = 5;
const sshKeys = {
    key:    fs.readFileSync("/etc/letsencrypt/archive/" + DOMAIN + "/privkey1.pem"),
    cert:   fs.readFileSync("/etc/letsencrypt/archive/" + DOMAIN + "/fullchain1.pem"),
    ca:     fs.readFileSync("/etc/letsencrypt/archive/" + DOMAIN + "/chain1.pem")
};





var server = https.createServer(sshKeys);
server.listen(PORT);
var wss = new WebSocket.Server({server: server});



function originIsAllowed(origin) {
    if (!ALLOWED_ORIGINS.includes(origin)) return false;
    return true;
}


wss.on('connection', function(ws, request, client) {// Web Socket
    let protocol = request.headers["sec-websocket-protocol"];

    if (!originIsAllowed(request.headers.origin) || protocol != "pubquiz-protocol") 
    {
      ws.close();
      console.log('[Reject] Connection from origin ' + request.headers.origin + ' with protocol ' + protocol + ' rejected.');
      return;
    }

    console.log('[Connect] Connection from origin ' + request.headers.origin + ' with protocol ' + protocol + ' allowed.');

    let Client = new _Client(ws);
    Clients.push(Client);

    Client.connection.on('message', function(_message) {
        let clientData = JSON.parse(_message);

        if (!Client.enabled) return Client.enable(clientData);
        if (Client.type != "controller") return;

        console.log("[Controller " + Client.id + "] send: " + JSON.stringify(clientData));
        
        for (client of Clients)
        {
            if (client.type != "displayer" || !client.enabled) continue;
            if (!client.controller || client.controller.key != Client.key) continue;

            client.send(JSON.stringify(clientData));
        }
    });

    Client.connection.on('close', function(reasonCode, description) {
        console.log('[Disconnect] Client ' + Client.id + " disconnected: " + reasonCode + " " + description);
        Clients.removeClient(Client.id);
    });
});








let Clients = [];
Clients.removeClient = function(_id) {
    for (let i = 0; i < this.length; i++)
    {
        if (this[i].id != _id) continue;
        let client = this.splice(i, 1);
        if (client.connection) client.connection.close();
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




function _Client(_connection) {
    this.id         = newId();
    this.enabled    = false;
    this.type       = false;
    this.connection = _connection;

    this.enable = function(_data) {
        let clientType = _data.type;
        switch (clientType) 
        {
            case "displayer": 
                this.type = "displayer";
                let controller = Clients.findController(_data.key);
                if (!controller) return this.send(JSON.stringify({error: "Controller not found"}));

                this.controller = controller;
                this.send(JSON.stringify({connectionStatus: "OK", key: this.controller.key}));
                this.controller.send(JSON.stringify({message: "A displayer connected", id: this.id}));
            break;
            case "controller":
                // let key = parseInt(String(_data.key).substr(0, KEY_LENGTH));
                // if (
                //     !_data.key || !key || isNaN(key) || key < 0 ||
                //     Clients.findController(key)
                // ) key = generateKey();
                
                // this.key = key;
                this.key = 10000;
                Clients.removeClient(Clients.findController(this.key).id);

                this.type = "controller";
                this.send(JSON.stringify({connectionStatus: "OK", key: this.key}));
            break;
            default: return false; break;
        }

        this.enabled = true;
    }

    this.send = function(_str) {
        this.connection.send(_str);
    }

    this.remove = function() {
        Client.removeClient(this.id);
    }


    function generateKey() {
        return Math.round(Math.random() * Math.pow(10, KEY_LENGTH));
    }
}






function newId() {return parseInt(Math.round(Math.random() * 100000000) + "" + Math.round(Math.random() * 100000000));}