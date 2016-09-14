var express=require('express');
var app=express();
var port=process.env.PORT || 8080;
app.get('/',function (reg,res){
	res.send('heloo you r using express for runing the server');
})
app.get('/about',function (reg,res){
	res.send('heloo you r using express  for connecting to the server');
})
app.listen(port);

