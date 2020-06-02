var express = require("express");
var app = express();

// set the view engine to ejs
app.set("views", "./views"); // specify the views directory
app.set("view engine", "ejs");

// index page
app.get("/", function (req, res) {
  res.render("pages/index");
});

var port = 8080;
app.listen(port);
console.log("Server is running on port", port);
