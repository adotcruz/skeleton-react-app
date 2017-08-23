var express = require('express'),
engines = require('consolidate');

var app = new express();
app.set('views', __dirname+'./../app');
app.engine('html', engines.hogan); // tell Express to run .html files through Hogan
app.set('view engine', 'html'); //register .html extension as template engine so we can render .html pages
app.use(express.static(__dirname + './../.tmp'));




app.get("/", function(req, res){
      res.render('index.html', {});
})
.listen(7778);
