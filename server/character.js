var cls = require('./lib/class'),
    Entity = require('./entity.js');

module.exports = Character = Entity.extend({
    init: function (id, x, y, z, name, locationId) {
        this._super(id, x, y, z);
        this.name = name;
        this.bodyParts = {'голова': '100',
            'тело': '0',
            'левая кисть': '0',
            'правая кисть': '0',
            'левое предплечье': '0',
            'правое предплечье': '0',
            'левое плечо': '0',
            'правое плечо': '0',
            'левое бедро': '0',
            'правое бедро': '0',
            'левая голень': '0',
            'правая голень': '0'
        };
        this.maxPartHealth = 100;
        this.maxHealth = this.maxPartHealth * this.partsHealth.length;
        this.locationId = locationId;
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

    getLocationId: function () {
        return this.locationId;
    },

    getCurrentHealth: function(){
        var currentHealth = 0;
        this.bodyParts.forEach(function(partHealth){
            currentHealth += this.bodyParts[partHealth];
        })
        return (currentHealth/this.maxHealth)*100;
    }
});
