var express = require("express"),
	app 	= express();

	app.set("view engine", "ejs");

	app.get("/", function(req,res){
		res.redirect("index");
	})

	app.get("/index", function(req, res){
		res.render("index");
	});

	app.listen(3000, function () {
		console.log("Express server listening on port 3000");
	});