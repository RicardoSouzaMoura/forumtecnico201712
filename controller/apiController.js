var Subscriptions = require('../model/subscriptionModel');
var Messages = require('../model/messageModel');
var bodyParser = require('body-parser');

const superagent = require('superagent');

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

    app.post('/api/message', function(req, res){

        var newMessage = Messages({
            alert: req.body.alert,
            data: req.body.data
        });
        newMessage.save(function(err){
            if (err) { 
                throw err;
            }

            var body = {
                "alert" : req.body.alert,
                "data" : req.body.data
            };
            const authToken = "Basic " + (new Buffer("smpPush:push2smp!").toString('base64'));

             superagent.post('https://wdsmph.petrobras.com.br:9081/restnotification/application/br.com.petrobras.forumtecnico201712')
                .send(body)
                .set('Authorization', authToken)
                .end((errSmp, resSmp) => {
                     if (errSmp) {
                        console.log("!!! Error !!!");
                        console.log(errSmp); 
                        res.statusCode = resSmp.statusCode;
                        res.send('{"result":"Erro ao enviar push"}');
                     }
                    console.log("!!! Sucesso - push enviado !!!");
                    console.log(resSmp.body);
                    res.send('{"result":"Successo ao enviar push"}');
            });

        });

        //     var body = {
        //         "alert" : "Forum Tecnico",
        //         "data" : "Mensagem via node"
        //     };
        //     const authToken = "Basic " + (new Buffer("smpPush:push2smp!").toString('base64'));
        //     var instance = axios.create({
        //         //baseURL: 'https://wdsmph.petrobras.com.br:9081/restnotification/application/br.com.petrobras.forumtecnico201712',
        //         baseURL: 'https://wdsmph.petrobras.com.br:9081',
        //         //baseURL: 'https://api.github.com/users/codeheaven-io',
        //         //baseURL: "http://10.24.144.156:5000/registros",
        //         proxy: "false",
        //         timeout: 10000//,
        //         //headers: {'Authorization': authToken}
        //     });
        // instance.get(""/*, body*/)
        //         .then(response => {
        //             console.log("Sucesso no SMP3");
        //             console.log(response.data);
        //             res.send("Success");
        //         })
        //         .catch(error => {
        //             console.log(error);
        //             console.log("falha no SMP3");
        //             res.send("Success sem envio para SMP3");
        //          });

            
        //})
    });

    app.get('/api/messages', function(req, res){
        Messages.find(function(err, result){
            if (err) throw err;
            res.send(result);
        });

    });

}