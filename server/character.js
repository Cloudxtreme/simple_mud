var cls = require('./lib/class'),
    Entity = require('./entity.js');

module.exports = Character = Entity.extend({
    init: function(id, x, y, name){
        this._super(id, x, y);
        this.name = name;
    },

    moveUp: function (){
        this.y++;
    },

    moveDown: function(){
        this.y--;
    },

    moveLeft: function(){
        this.x--;
    },

    modeRight: function(){
        this.x++;
    }
});
