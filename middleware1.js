var middeleware={
	requireAuthentication: function(req,res,next){
		console.log('you doing authentication!')
		next();
	},
	logger:function(req, res, next){
	console.log('request '+new Date().toString()+req.method+' '+req.originalUrl);
	next();
}

	
}
module.exports=middeleware;
