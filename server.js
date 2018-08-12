// npm modules
const express = require("express");
const bodyParser = require("body-parser");

//express variables
var app = express();
var PORT = process.env.PORT || 3000;

//express parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//different javascript files we require
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listening to port 3000
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});