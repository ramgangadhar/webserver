var express=require('express');
var app=express();
var port=8080;
app.get('/',function (reg,res){
	res.send('heloo you r using express for runing the server');
})
app.get('/about',function (reg,res){
	res.send('heloo you r using express for about the server');
})
app.use(express.static(__dirname +'/public'))
app.listen(port,function(){
	console.log('process copleted port number is '+port)
});


