var Subscriptions = require('../model/subscriptionModel');
var Messages = require('../model/messageModel');

module.exports = function (app){

    app.get('/api/setupSubscriptions', function(req, res){
        console.log("preparando subscriptions...");
        var starterSubscriptions = [
            {
                "username": "UPN5",
                "deviceModel": "iPhone 5S",
                "deviceType": "iOS",
                "deviceOsVersion": "11"
            },
            {
                "username": "U4UV",
                "deviceModel": "Samsung Galaxy",
                "deviceType": "Android",
                "deviceOsVersion": "7"
            },
            {
                "username": "AIGT",
                "deviceModel": "Motorola Z",
                "deviceType": "Android",
                "deviceOsVersion": "7"
            }
        ];

        Subscriptions.create(starterSubscriptions, function(err, result){
            console.log("criando subscriptions...");
            res.send(result);
        });
    });

    app.get('/api/setupMessages', function(req, res){
        console.log("preparando messages...");
        var starterMessages = [
            {
                "alert": "Forum Tecnico 2017/12",
                "data": "mensagem 1"
            },
            {
                "alert": "Forum Tecnico 2017/12",
                "data": "mensagem 2"
            },
            {
                "alert": "Forum Tecnico 2017/12",
                "data": "mensagem 3"
            }
        ];

        Messages.create(starterMessages, function(err, result){
            console.log("criando messages...");
            res.send(result);
        });
    });
}