var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;


db.on('error', function (err) {
    //TODO add logging
});
db.once('open', function callback() {
    //TODO add logging
});

var Location = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true}
});

var Location = mongoose.model('Location', Location);

module.exports.Location = Location;
