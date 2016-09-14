var express=require('express');
var app=express();
app.get('/',function (reg,res){
	res.send('heloo you r using express for runing the server');
})
app.get('/about',function (reg,res){
	res.send('heloo you r using express ');
})
app.listen(4040);

