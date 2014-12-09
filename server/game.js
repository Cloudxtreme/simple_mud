var cls = require('./lib/class'),
    Player = require('./player.js'),
    Commands = require('./commands.js');

module.exports = Game = cls.Class.extend({
    init: function () {
        this.players = {};
    },

    onPlayerConnect: function (player) {
        this.players[player.id] = player;
    },

    onPlayerDisconnect: function (playerId) {
        delete this.players[playerId];
    },

    onCommandReceive: function (playerId, msg) {
        var messages = msg.split(' ');
        if (Commands[messages[0]] && this.players[playerId]) {
            return Commands[messages[0]];
        }
    },

    onMove: function (playerId, msg) {
        var command = this.onCommandReceive(playerId, msg);
        this.players[playerId][command]();
        return this.players[playerId].getPosition();
    }
});
