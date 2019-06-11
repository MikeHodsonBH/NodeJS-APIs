//required imports
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

//create an instance of express for the app and instantiate bodyParser and cors
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

//GET call to return JSON that formats natural and unix dates
app.get("/dateValues/:dateVal", function(req,res,next) {
    //Gets the request date
    var dateVal = req.params.dateVal;

    //Options for formatting date in natural form.
    var dateFormattingOptions = {
        year : 'numeric',
        month: 'long',
        day: 'numeric'
    }

    if(isNaN(dateVal)) {
        var naturalDate = new Date(dateVal);
        naturalDate = naturalDate.toLocaleDateString("en-us", dateFormattingOptions);
        var unixDate = new Date(dateVal).getTime()/1000;
    } else { 
        var unixDate = dateVal;
        var naturalDate = new Date(dateVal * 1000);
        naturalDate = naturalDate.toLocaleDateString("en-us", dateFormattingOptions);
    }

    res.json({unix: unixDate, natural: naturalDate});
});

//npm install --save -g nodemon
//Installed nodemon package for debugging. Changes updated in code are run automatically on terminal once file is saved
app.listen(3000, function(req,res,next) {
    console.log("/\\.. Working");
});