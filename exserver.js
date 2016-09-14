var express=require('express');
var app=express();
app.get('/',function (reg,res){
	res.send('heloo you r using express for runing the server');
})
app.get('/about',function (reg,res){
	res.send('heloo you r using express for about the server and also using git it will update data');
})
app.listen(4040);

