const express = require("express");
const bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var friends = [
    {
        name: "Karl Marx",
        picture: "http://www.historyguide.org/images/marx-bio.jpg",
        score1: 5,
        score2: 5,
        score3: 5,
        score4: 5,
        score5: 5,
        score6: 5,
        score7: 5,
        score8: 5,
        score9: 5,
        score10: 5
    },
    {
        name: "Ayn Rand",
        picture: "http://www.slate.com/content/dam/slate/archive/2009/11/1_123125_122946_2207169_2233141_091102_books_aynrand2tn.jpg.CROP.original-original.jpg",
        score1: 1,
        score2: 1,
        score3: 1,
        score4: 1,
        score5: 1,
        score6: 1,
        score7: 1,
        score8: 1,
        score9: 1,
        score10: 1
    }
];

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});