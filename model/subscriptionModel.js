var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var subscriptionSchema = new Schema({
    username: String,
    deviceModel: String,
    deviceType: String,
    deviceOsVersion: String
});

var Subscription = mongoose.model('subscription', subscriptionSchema );

module.exports = Subscription;