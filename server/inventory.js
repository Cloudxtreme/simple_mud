var cls = require('./lib/class');

module.exports = Inventory = cls.Class.extend({
    init: function(){
        this.things = {};
        this.maxThings = 20;
    },

    addItem: function(item) {
        if (this.things.length < this.maxThings) {
            this.things[item.id] = item;
        }
        else {
            //TODO inventory overflow
        }
    },

    removeItem: function(itemId){
        delete this.things[itemId];
    }
});
