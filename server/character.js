var cls = require('./lib/class'),
    Entity = require('./entity.js');

module.exports = Character = Entity.extend({
    init: function (id, x, y, z, name, location) {
        this._super(id, x, y, z);
        this.name = name;
        this.location = location;
    },

    moveSouth: function(){
        this.y--;
    },

    moveNord: function(){
        this.y++;
    },

    moveWest: function () {
        this.x--;
    },

    moveEast: function () {
        this.x++;
    },

    moveUp: function () {
        this.z++;
    },

    moveDown: function () {
        this.z--;
    },

    getLocation: function () {
        return this.location;
    }
});
