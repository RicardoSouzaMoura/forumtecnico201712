var Subscription = require('../model/subscriptionModel');

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

        Subscription.create(starterSubscriptions, function(err, result){
            console.log("criando subscriptions...");
            res.send(result);
        });
    });
}