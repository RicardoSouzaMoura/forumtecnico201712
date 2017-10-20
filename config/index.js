var configFiles = require('./config');

module.exports = {

    getDbConnectionString: function(){
        //return "mongodb://"+configFiles.usr+":"+configFiles.pwd+"@10.24.144.156:27017/test";
        return "mongodb://10.24.144.156/ForumTecnico";
    }

}