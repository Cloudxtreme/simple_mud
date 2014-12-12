function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

window.onload = function () {
    var socket = io();
    $('form').submit(function () {
        var msg = $('#m').val();
        var commandType = getCommandType(msg);
        socket.emit(commandType, msg);
        $('#m').val('');
        return false;
    });
    socket.on('message', function (msg) {
        $('#messages').append($('<li>').text(msg));
    });
    socket.on('move', function (msg) {
        $('#messages').append($('<li>').text('Вы находитесь в ' + msg.x + ';' + msg.y));
    });
};

function getCommandType(msg) {
    var commands = {
        move: ['север', 'юг', 'запад', 'восток', 'вверх', 'вниз']
    };

    for (var command in commands) {
        if (~commands[command].indexOf(msg)) {
            return command;
        }
        else {
            return 'message';
        }
    }

}
