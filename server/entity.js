var cls = require('./lib/class');

module.exports = Entity = cls.Class.extend({
    init: function (id, x, y, z) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.z = z;
    },

    setPosition: function (x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    },

    getPosition: function () {
        return [
            this.x,
            this.y,
            this.z
        ];
    }
});
