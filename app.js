var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var debug = require('debug')('simple_mud');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
UUID = require('node-uuid');
var Game = require('./server/game.js');
var Character = require('./server/character.js');
var Command = require('./server/command.js');

var routes = require('./routes/index');
var users = require('./routes/users');

app.set('port', process.env.PORT || 3000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(path.join(__dirname + '/bower_components')));
app.use('/node_modules', express.static(path.join(__dirname + '/node_modules')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var game = new Game();

io.on('connection', function(socket){
    //socket.userId = UUID();
    var socketLocation = 'start location';  //TODO get location from database and join socket to corresponding room
    var locationDescription = "description of the current location"; //TODO get location description from database
    var player = new Character(socket.id, 'player', 0, 0, 0, 'user1', socketLocation);
    game.onPlayerConnect(player);
    socket.join(socketLocation);
    socket.broadcast.to(socketLocation).emit('message', 'Player ' + socket.id + ' has been connected!');
    socket.emit('message', locationDescription);

    socket.on('message', function(msg){
        io.to(socketLocation).emit('message', msg);
    });

    socket.on('say', function(msg){
        var command = new Command(msg);
        io.sockets.connected[command.getTarget()].emit('message', command.getText());
    });

    socket.on('world', function(msg){
        var command = new Command(msg);
        io.sockets.emit('world', command.getText());
    });

    socket.on('move', function(msg){
        game.onCommandReceive(socket.id, msg);
        var position = player.getPosition();
        socket.emit('move', {x: position[0], y: position[1], z: position[2]});
    });

    socket.on('state', function(msg) {
        game.onCommandReceive(socket.id, msg);
        socket.emit('state', player.getState());
    });

    socket.on('disconnect', function(msg){
        game.onPlayerDisconnect(socket.id);
        io.to(socketLocation).emit('message', 'Player ' + socket.id + ' has been disconnected!');
    })
});

var server = http.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});

module.exports = app;
