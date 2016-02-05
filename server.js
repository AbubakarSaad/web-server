/**
 * Created by abubakarsaad on 2016-02-05.
 */
var express = require('express');
var app = express();
var PORT = 1337;

var middleWare = {
    requireAuthentication: function(req, res, next){
        console.log('private route hit');
        next();
    },
    logger: function(req, res, next){
        // new Date()
        var date = new Date();
        console.log(req.method + ' ' + req.originalUrl + ' ' + date.toString());
        next();
    }
};

//app.use(middleWare.requireAuthentication);
app.use(middleWare.logger);
app.get('/about',middleWare.requireAuthentication, function(req, res){
   res.send('About us? We are cool people, who just wants to learn and play at the same time while helping others :)');
});

app.use(express.static(__dirname + '/public'));


app.listen(PORT, function(){
    console.log('express server started!' + ' port ' + PORT);
});
console.log('listening on port 1337');