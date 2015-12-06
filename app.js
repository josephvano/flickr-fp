var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/blah", function(req, res){
    res.send("Hello world");
});

var server = app.listen(3002, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening on http://%s:%s", host, port);
});
