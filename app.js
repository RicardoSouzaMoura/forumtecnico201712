var express = require ('express');
var app = express();
var mongoose = require ('mongoose');
var config = require ('./config');
var setupController = require ('./controller/setupController');
var apiController = require ('./controller/apiController');

mongoose.connect(config.getDbConnectionString(), {
    useMongoClient: true,
    /* other options */
  });

var PORT = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));
setupController(app);
apiController(app);

app.listen(PORT);