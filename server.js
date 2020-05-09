//Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

//Express
var app = express();

//Define PORT
var PORT = process.env.PORT || 8080;

// Static content
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars setup
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes 
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Start server
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});
