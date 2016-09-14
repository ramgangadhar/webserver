var express= require('express');
var app=express();
var middeleware=require('./middleware1.js')

app.use(middeleware.logger);

app.get('/about',middeleware.requireAuthentication,function(req,res){
	res.send('this is about the page')
})
app.use(middeleware.logger);
/*app.get('/aboutus',middeleware.logger,function(req,res){
	res.send('this is about us  the page')
})*/
app.use(express.static(__dirname+'/public'))
app.listen(8080);
