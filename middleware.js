var express= require('express');
var app=express();
var middeleware={
	requireAuthentication: function(req,res,next){
		console.log('you doing authentication!')
		next();
	},
	logger:function(req, res, next){
	console.log('request '+new Date().toString()+req.method+' '+req.originalUrl);
	next();
}

	
};

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
