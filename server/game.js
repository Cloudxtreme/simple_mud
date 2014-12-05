var cls = require('./lib/class'),
    Player = require('./player.js'),
    Commands = require('./commands.js');

module.exports = Game = cls.Class.extend({
   init: function(){
       this.players = {};
   },

    onPlayerConnect: function(player){
        this.players[player.id] = player;
    },

    onPlayerDisconnect: function(playerId) {
        delete this.players[playerId];
    },

    onMessageReceive: function(playerId, msg){
        var messages = msg.split(' ');
        if (Commands[messages[0]] && this.players[playerId]){
            var command = Commands[messages[0]];
            this.players[playerId][command]();
        }
    }
});
