var express = require("express");
var	app = express();
var PORT = 80;

	app.set("view engine", "ejs");

	app.get("/", function(req,res){
		res.redirect("index");
	});

	app.get("/index", function(req, res){
		res.render("index");
	});

	app.listen(PORT, function () {
		console.log("Express server listening on port "+ PORT);
	});