
global.startupParams = {};
for (argKey in process.argv) {
    var argData = process.argv[argKey].split("=")
    if (argData.length == 2) {
        global.startupParams[argData[0]] = argData[1];
    }
}

var configPath = "./config.js";

if (global.startupParams.config) {
    configPath = global.startupParams.config;
}

global.config = require(configPath)

global.connectionsOnline = {};

var listenerComponents = require('./components.js');
var listenerClients = require('./clients.js');
var api = require('./api');

api.create();

for (var i = 0; i < global.config.listenersComponent.length; i++) {
    var listener = global.config.listenersComponent[i];
    listenerComponents.create(i, listener.host, listener.port, listener.domain);
}

for (var i = 0; i < global.config.listenersClient.length; i++) {
    var listener = global.config.listenersClient[i];
    listenerClients.create(i, listener.host, listener.port, listener.domain, listener.tlsUse, listener.tlsRequire, listener.tlsKey, listener.tlsCert, listener.socketSpeedLimit);
}

/*

var net = require('net');

function SendTcpPacket(host, port, data) {

    var client = new net.Socket();

    client.connect(port, host, function () {
        client.write(data);
        client.destroy();
    });

    client.on('error', function () {

    });
}

SendTcpPacket("31.134.16.166", 1100, "6\u0001nfydldtz\u0001Warface_08.06.2016");

setInterval(function(){
    SendTcpPacket("31.134.16.166", 1100, "6\u0001nfydldtz\u0001Warface_08.06.2016");
}, 60000)

*/