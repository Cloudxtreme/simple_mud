var cls = require('./lib/class'),
    Character = require('./character.js');

module.exports = Player = Character.extend({
    init: function (id, x, y, z, name,  location) {
        this._super(id, x, y, z, name,  location);
        this.health = 100;
        this.inventory = {};
    },

    addItem: function(item) {
        this.inventory[item.id] = item;
    },

    removeItem: function(itemId){
        delete this.inventory[itemId];
    }

});
