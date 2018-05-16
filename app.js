var express = require('express');
var app = express();
var path = require("path");
app.use(express.static(__dirname + '/'));

app.set('view engine', 'ejs');



//Homepage
app.get('/', function(req,res){
	res.render('Menu/menu_tabs');
});

//About Page
/*app.get('/about', function(req,res){
	res.render('pages/about');
});

//Projects
app.get('/Menu', function(req,res){
	res.render('menu_tabs');
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
*/

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
