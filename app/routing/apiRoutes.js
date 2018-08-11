const path = require('path');

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });

    app.get("/api/characters/:friend", function(req, res) {
        var chosen = req.params.friend;
    
        console.log(chosen);
        
        for (var i = 0; i < friends.length; i++) {
            if (chosen === friends[i].name) {
            return res.json(friends[i].name);
            }
        }
        
        return res.json(false);
    });

    
};