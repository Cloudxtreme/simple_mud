var cls = require('./lib/class');

module.exports = HealthState = cls.Class.extend({
    init: function(){
        this.bodyPartsHealth = {
            HEAD: {name: 'голова', currentValue: '120', maxValue: '120'},
            BODY: {name: 'тело', currentValue: '150', maxValue: '150'},
            LEFT_HAND: {name: 'левая кисть', currentValue: '100', maxValue: '100'},
            RIGHT_HAND: {name: 'правая кисть', currentValue: '100', maxValue: '100'},
            LEFT_FOREARM: {name: 'левое предплечье', currentValue: '100', maxValue: '100'},
            RIGHT_FOREARM: {name: 'правое предплечье', currentValue: '100', maxValue: '100'},
            LEFT_SHOULDER: {name: 'левое плечо', currentValue: '100', maxValue: '100'},
            RIGHT_SHOULDER: {name: 'правое плечо', currentValue: '100', maxValue: '100'},
            LEFT_HIP: {name: 'левое бедро', currentValue: '100', maxValue: '100'},
            RIGHT_HIP: {name: 'правое бедро', currentValue: '100', maxValue: '100'},
            LEFT_SHIN: {name: 'левая голень', currentValue: '100', maxValue: '100'},
            RIGHT_SHIN: {name: 'правая голень', currentValue: '100', maxValue: '100'}
        };
    },

    getAllHealthStats: function(){
        return this.bodyPartsHealth;
    },

    getCurrentHealth: function(){
        var currentHealth = 0;
        var maxHealth = 0;
        this.bodyPartsHealth.forEach(function(partHealth){
            currentHealth += partHealth.currentValue;
            maxHealth += partHealth.maxValue;
        });
        return (currentHealth/maxHealth)*100;
    }

});