var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var subscriptionSchema = new Schema({
    username: String,
    deviceModel: String,
    deviceType: String,
    deviceOsVersion: String
});

var Subscriptions = mongoose.model('Subscriptions', subscriptionSchema );

module.exports = Subscriptions;