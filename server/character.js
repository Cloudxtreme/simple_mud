var cls = require('./lib/class'),
    Entity = require('./entity.js');

module.exports = Character = Entity.extend({
    init: function (id, x, y, name, location) {
        this._super(id, x, y);
        this.name = name;
        this.location = location;
    },

    moveUp: function () {
        this.y++;
    },

    moveDown: function () {
        this.y--;
    },

    moveLeft: function () {
        this.x--;
    },

    moveRight: function () {
        this.x++;
    },

    getLocation: function () {
        return this.location;
    }
});
