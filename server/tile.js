var cls = require('./lib/class');

module.exports = Tile = Entity.extend({
    init: function(id, x, y, type, width, height, description){
        this._super(id, x, y);
        this.width = width;
        this.height = height;
        this.type = type;
        this.description = description;
    }
});

