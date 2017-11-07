var Subscriptions = require('../model/subscriptionModel');
var bodyParser = require('body-parser');

module.exports = function (app){

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.post('/api/subscription', function(req, res){
        var newSubscription = Subscriptions({
            username: req.body.username,
            deviceModel: req.body.deviceModel,
            deviceType: req.body.deviceType,
            deviceOsVersion: req.body.deviceOsVersion
        });
        newSubscription.save(function(err){
            if (err) throw err;
            res.send("Success");
        })
    });

    app.get('/api/subscriptions', function(req, res){
        Subscriptions.find(function(err, result){
            if (err) throw err;
            res.send(result);
        });

    });

}