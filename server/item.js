var cls = require('./lib/class');

module.exports = Item = cls.Class.extend({
    init: function (id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    },

    getItemInfo: function(){
        return [
            this.id,
            this.name,
            this.description
        ]
    }
});