const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
      type: Date,
      default: Date.now(),
        
    },
  
    exercises: [
        {
      type: String,
      name: String,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number
    }]
});
  
  const Workout = mongoose.model("Workout", WorkoutSchema);
  
  // console.log("here "++Workout)
  module.exports = Workout;