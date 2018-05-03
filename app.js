var express = require('express');
var app = express();
var path = require("path");
app.use(express.static(__dirname + '/'));

app.set('view engine', 'ejs');



//Homepage
app.get('/', function(req,res){
	res.render('pages/index');
});

//About Page
app.get('/about', function(req,res){
	res.render('pages/about');
});

//Projects
app.get('/projects', function(req,res){
	res.render('pages/projects');
});

app.get('/projects/hyperloop', function(req,res){
	res.render('pages/projects/hyperloop');
});

app.get('/projects/cansat', function(req,res){
	res.render('pages/projects/cansat');
});

app.get('/projects/dbproj', function(req,res){
	res.render('pages/projects/dbproj');
});

app.get('/projects/locolab', function(req,res){
	res.render('pages/projects/locolab');
});

app.get('/projects/senior', function(req,res){
	res.render('pages/projects/senior');
});

//Smarthome
app.get('/smarthome', function(req,res){
	res.render('pages/smarthome');
});

app.get('/smarthome/rgb', function(req,res){
	res.render('pages/smarthome/rgb');
});

app.get('/smarthome/led', function(req,res){
	res.render('pages/smarthome/led');
});

app.get('/smarthome/sensors', function(req,res){
	res.render('pages/smarthome/sensors');
});

//Start Server
var server = app.listen(process.env.PORT || 3000, function() {
        if(process.env.PORT != null) {
	        logger('Express is listening to ' + process.env.PORT);
	} else {
	        logger('Express is listening to http://localhost:3000');
	}
});


//Logger for file loggin at some point
function logger(data){
	d = new Date();
	let log = "\n---------------------------------------------------------\n" + d.toLocaleString() + "\n" + data+"\n---------------------------------------------------------\n";
	console.log(log);
	return data;
};
