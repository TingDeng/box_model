var express = require('express'),

    server  = express();
    server.use(express.static(__dirname+'/public'));

    

    server.get('/', function(req, res){
    res.sendFile('html/index.html', { root: __dirname + '/public' });
});

    server.listen(8080, function(){
    console.log('Now listening on port ' + 8080);
});
