// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************


// Requiring our Workout model

// var db = require("../models/models.js");
var Workout = require("../models/models.js");


// Routes
// =============================================================
module.exports = function(app) {

// Get Last Workout

    app.get("/api/workouts", (req, res)=>{
        Workout.find({}, (error,data) => {
            if (error){
                console.log(error)
            } else {
                res.json(data)
            }
        }).sort({_id:-1}).limit(1)
    });


// Add Exercise 






app.put("/api/workouts/:id", (req, res)=>{
    console.log(req.body);
    console.log(req.params.id)
    Workout.updateOne({_id: req.params.id},
        { $push: {exercises: req.body}}
    ).then ((data)=>{
        res.json(data)
    })
  
.catch(error =>{
    console.log(error);
});

});

// Create Workout



  app.post("/api/workouts", (req, res)=>{
      Workout.create(req.body, (error,data) => {
          if (error){
              console.log(error)
          } else {
              res.json(data)
          }
      })
 
  });


// Get Workouts in Range




app.get("/api/workouts/range", (req, res)=>{
    Workout.find({}, (error,data) => {
        if (error){
            console.log(error)
        } else {
            res.json(data)
        }
    })
 
});




}

