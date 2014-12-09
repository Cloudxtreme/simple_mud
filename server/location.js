var cls = require('./lib/class');

module.exports = Location = Entity.extend({
    init: function (id, x, y, name, tiles, height, width) {
        this._super(id, x, y);
        this.name = name;
        this.tiles = tiles;
        this.height = height;
        this.width = width;
    }
});

