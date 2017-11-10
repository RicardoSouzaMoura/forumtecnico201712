var configValues = require('./config');

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

module.exports = {

    getDbConnectionString: function(){
        //return "mongodb://"+configFiles.usr+":"+configFiles.pwd+"@10.24.144.156:27017/test";
        return "mongodb://10.24.144.156/ForumTecnico";
        //return 'mongodb://'+configValues.usr + ':' + configValues.pwd + '@ds113785.mlab.com:13785/forumtecnicosmp3';
    }

}