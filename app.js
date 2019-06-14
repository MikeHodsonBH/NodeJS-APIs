//Basic imports
var express = require("express"), accepts = require("accepts");
var bodyParser = require("body-parser");
var cors = require("cors");

//Create an instance of express for the app and instantiate bodyParser and cors
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

//Api endpoint
var api = "/api/whoami";
app.get(api, function(req,res,next) {
    var language, software, ipaddress;
    language = accepts(req).languages();
    software = req.get("User-Agent");
    ipaddress = req.ip;
    res.json({"ip":ipaddress, "language":language, "software":software}); 
    console.log("For the logs");
});

app.listen(3000, function(){
    console.log("Working");
});