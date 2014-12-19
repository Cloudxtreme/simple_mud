var cls = require('./lib/class'),
    Player = require('./character.js'),
    Command = require('./command.js');

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
        var command = new Command(msg);
        if (command.getCommand() && this.players[playerId]) {
            this.players[playerId][command.getCommand()]();
        }
    }
});
