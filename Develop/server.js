const express = require("express");
const mongoose = require("mongoose");
const Workout = require("./models/models.js")

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);





mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

  
app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});
