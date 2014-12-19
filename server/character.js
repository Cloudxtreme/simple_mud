var cls = require('./lib/class'),
    Entity = require('./entity.js'),
    HealthState = require('./health_state.js'),
    Inventory = require('./inventory.js');

var StateEnum = {
    STAND: 'стоит',
    LIE: 'лежит',
    SIT: 'сидит'
};

var CharacterType = {
    PLAYER: 'player',
    NPC: 'npc'
};

module.exports = Character = Entity.extend({
    init: function (id, type,  x, y, z, name, locationId) {
        this._super(id, x, y, z);
        this.type = type;
        this.name = name;
        this.bodyParts = new HealthState();
        this.inventory = new Inventory();
        this.locationId = locationId;
        this.state = StateEnum.STAND;
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

    sitDown: function() {
        this.state = StateEnum.SIT;
    },

    standUp: function() {
        this.state = StateEnum.STAND;
    },

    lieDown: function() {
        this.state = StateEnum.LIE;
    },

    getLocationId: function () {
        return this.locationId;
    },

    getState: function() {
        return this.state;
    }
});
