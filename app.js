var express = require ('express')
var config = require ('./config');
var mongoose = require ('mongoose');
var setupController = require ('./controllers/setupController');
var setupController = require ('./controllers/subscriptionController');
var app = express();
mongoose.connect(config.getDbConnectionString());

var PORT = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));
setupController(app);
//subscriptionController(app);

app.listen(PORT);