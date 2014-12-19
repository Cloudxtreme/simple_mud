var cls = require('./lib/class');

var COMMANDS = {
    'север': 'moveNord',
    'юг': 'moveSouth',
    'запад': 'moveWest',
    'восток': 'moveEast',
    'вверх': 'moveUp',
    'вниз': 'moveDown',
    'встать': 'standUp',
    'лечь': 'lieDown',
    'сесть': 'sitDown'
};

var COMMANDS_EXTENDED = {
    move: {commands:['север', 'юг', 'запад', 'восток', 'вверх', 'вниз'], args: '0'},
    state: {commands:['лечь', 'встать', 'сесть'], args: '0'},
    say: {commands: ['сказать'], args: '1'},
    world: {commands: ['мир'], args: '0'}
};

module.exports = Command = cls.Class.extend({
   init: function (msg) {
       var commandElements = msg.split(' ');
       this.command = COMMANDS[commandElements[0]];
       this.commandType = function(){
           for (var command in COMMANDS_EXTENDED){
               if(~COMMANDS_EXTENDED[command].commands.indexOf(commandElements[0])){
                   return command;
               }
           }
       }();
       var argsCount = COMMANDS_EXTENDED[this.commandType].args;
       this.target = commandElements[1];
       this.args = commandElements.slice().splice(1, argsCount + 1);
       this.text = commandElements.slice().splice(argsCount + 1).join(' ');
   },

   getArgs: function() {
       return this.args;
   },

   getText: function() {
       return this.text
   },

   getCommand: function() {
       return this.command;
   },

   getTarget: function() {
       return this.target;
   }
});