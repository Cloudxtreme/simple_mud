function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

window.onload = function () {
    var socket = io();
    $('form').submit(function () {
        var msg = trim($('#m').val());
        var commandType = getCommandType(msg);
        socket.emit(commandType, msg);
        $('#m').val('');
        return false;
    });
    socket.on('message', function (msg) {
        $('#messages').append($('<li>').text(msg));
    });
    socket.on('move', function (msg) {
        $('#messages').append($('<li>').text('Вы находитесь в ' + msg.x + ';' + msg.y + ';' + msg.z));
    });
    socket.on('state', function (msg) {
        $('#messages').append($('<li>').text('Ваш персонаж ' + msg));
    });
    socket.on('say', function (msg) {
        $('#messages').append($('<li>').text(msg));
    });
    socket.on('world', function (msg) {
        $('#messages').append($('<li>').text(msg));
    });
};

function getCommandType(msg) {
    var commands = {
        move: ['север', 'юг', 'запад', 'восток', 'вверх', 'вниз'],
        state: ['лечь', 'встать', 'сесть'],
        say: ['сказать'],
        world: ['мир']
    };

    var commandWord = msg.split(' ')[0];
    for (var command in commands) {
        if (~commands[command].indexOf(commandWord)) {
            return command;
        }
    }
    return 'message';
}

function trim(s) {
    return s.replace(/^\s+$/, '');
}
