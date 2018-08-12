//where our friends is at
var friends = require('../data/friends');

var friendos = friends.friends;
//exporting our api routes
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        console.log(friendos);
        return res.json(friendos);
    });

    app.get("/api/friends/:friend", function(req, res) {
        var chosen = req.params.friend;
    
        console.log(chosen);
        
        for (var i = 0; i < friendos.length; i++) {
            if (chosen === friendos[i].name) {
            return res.json(friendos[i].name);
            }
        }
        
        return res.json(false);
    });

    //posting our users inputs to our friends array
    app.post("/api/friends", function(req, res) {
        
        var newfriend = req.body;
      
        newfriend.name = newfriend.name.replace(/\s+/g, "").toLowerCase();
      
        friendos.push(newfriend);
      
        res.json(newfriend);
      });

    
};