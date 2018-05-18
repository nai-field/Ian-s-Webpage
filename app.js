var express = require('express');
var app = express();
var path = require("path");
app.use(express.static(__dirname + '/'));

app.set('view engine', 'ejs');



//Homepage
app.get('/', function(req,res){
	res.render('pages/Home');
});



//Projects
app.get('/projects/3dprinting', function(req,res){
	res.render('pages/projects/3dprinting');
});

app.get('/projects/hyperloop', function(req,res){
	res.render('pages/projects/hyperloop');
});

app.get('/projects/cansat', function(req,res){
	res.render('pages/projects/cansat');
});

app.get('/projects/drone', function(req,res){
	res.render('pages/projects/drone');
});

app.get('/projects/audiosynthesizer', function(req,res){
	res.render('pages/projects/audiosynthesizer');
});

app.get('/projects/senior', function(req,res){
	res.render('pages/projects/senior');
});


//Start Server
var server = app.listen(process.env.PORT || 8080, function() {
        if(process.env.PORT != null) {
	        logger('Express is listening to ' + process.env.PORT);
	} else {
	        logger('Express is listening to http://localhost:8080');
	}
});


//Logger for file loggin at some point
function logger(data){
	d = new Date();
	let log = "\n---------------------------------------------------------\n" + d.toLocaleString() + "\n" + data+"\n---------------------------------------------------------\n";
	console.log(log);
	return data;
};
