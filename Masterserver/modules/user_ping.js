exports.module = function (stanza) {

    if (stanza.attrs.from != global.config.masterserver.domain) {
        return;
    }

    var jid = stanza.children[0].children[0].attrs.jid;
    var ping = Number(stanza.children[0].children[0].attrs.ping);

    var profileObject = global.users.jid[jid];

    if (!profileObject) {
        return;
    }

    var roomObject = profileObject.room_object;

    if (!roomObject) {
        return;
    }

    var playerObjectTarget = roomObject.core.players[roomObject.core.players.findIndex(function (x) { return x.online_id == jid })];

    if (!playerObjectTarget) {
        return;
    }

    if (ping == playerObjectTarget.ping) {
        return;
    }

    playerObjectTarget.ping = ping;
    roomObject.pings.revision++;
}
