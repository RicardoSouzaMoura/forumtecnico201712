var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var messageSchema = new Schema({
    alert: String,
    data: String
});

var Messages = mongoose.model('Messages', messageSchema );

module.exports = Messages;