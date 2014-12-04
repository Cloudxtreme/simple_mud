var cls = require('./lib/class'),
    Player = require('./player.js');

module.exports = Game = cls.Class.extend({
   init: function(){
       this.players = [];
   },

    onPlayerConnect: function(player){
           this.players.push(player);
           this.players.forEach(function(player){
               console.log(player.id);
           })
       }
});
