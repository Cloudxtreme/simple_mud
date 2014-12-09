var cls = require('./lib/class'),
    Character = require('./character.js');

module.exports = Player = Character.extend({
    init: function (id, x, y, name) {
        this._super(id, x, y, name);
    }
});
