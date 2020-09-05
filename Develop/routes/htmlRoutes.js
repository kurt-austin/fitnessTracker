// Requiring path to so we can use relative routes to our HTML files
var path = require("path");


module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.
  
    // index route loads index.html
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });
  
    // Stats route loads the stats.html page,
    
    app.get("/stats", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
  
    // Stats route loads the exercise.html page,
    
    app.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
      });
   
  
  };