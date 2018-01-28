var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
var WagerSchema = new Schema({
      firstName: {type: String},
      lastName:{type:String},
      q1: String,
      q2: String,
      q3: String,
      q4: String, 
      q5: String, 
      q6: String,   
      score: {type: Number},                                                             
      id:{type: Schema.Types.ObjectId}  
});

// Create the Model
var Wager = mongoose.model("Wager", WagerSchema);

// Export it for use elsewhere
module.exports = Wager;

