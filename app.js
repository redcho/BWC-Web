var express = require("express");
var	app = express();
var PORT = 80;
var authentication = require('./models/authentication');

	app.set("view engine", "ejs");
	app.use(authentication.aut);

	app.get("/", function(req,res){
		res.redirect("index");
	});

	app.get("/index", function(req, res){
		res.render("index");
	});

	//needs work about sessions it doesnt work correctly 
	app.get("/logout", function(req, res){
		 
		res.set('WWW-Authenticate', 'Basic realm="401"');
		res.status(401).send('Authentication required.');     

	});

	app.listen(PORT, function () {
		console.log("Express server listening on port "+ PORT);
	});