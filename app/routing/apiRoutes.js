const path = require('path');

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

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        console.log(friends);
        return res.json(friends);
    });

    app.get("/api/friends/:friend", function(req, res) {
        var chosen = req.params.friend;
    
        console.log(chosen);
        
        for (var i = 0; i < friends.length; i++) {
            if (chosen === friends[i].name) {
            return res.json(friends[i].name);
            }
        }
        
        return res.json(false);
    });

    app.post("/api/friends", function(req, res) {
        
        var newfriend = req.body;
      
        newfriend.name = newfriend.name.replace(/\s+/g, "").toLowerCase();
      
        friends.push(newfriend);
      
        res.json(newfriend);
      });

    
};