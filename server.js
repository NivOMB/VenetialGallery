var express     =   require("express");
var server         =   express();
var bodyParser  =   require("body-parser");
var router      =   express.Router();

var Gallery = require('express-photo-gallery');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({"extended" : false}));

router.get("/",function(req,res){
    res.json({"error" : false,"message" : "Hello World"});
});

var options = {
  title: 'Showcase V. Ginige Paintings'
};
 

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 

server.use('/photos', Gallery('./photos', options));

server.use('/',router);

server.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});
console.log("Listening to PORT...." + server_port);