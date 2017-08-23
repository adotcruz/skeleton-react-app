var express = require('express'),
engines = require('consolidate'),
http = require('http');

var PORT = 7778;


var app = new express();
var server = http.createServer(app);
app.set('views', __dirname+'./../app');
app.engine('html', engines.hogan); // tell Express to run .html files through Hogan
app.set('view engine', 'html'); //register .html extension as template engine so we can render .html pages
app.use(express.static(__dirname + './../.tmp'));




app.get("/", function(req, res){
      console.log('~ Request received:', req.method , req.url);
      res.render('index.html', {});
});
server.listen(PORT, () =>{
      console.log('~ Server listening on port' + PORT);
});
