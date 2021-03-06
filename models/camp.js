
// mongoose
let mongoose = require('mongoose');

// json definition ( data types, properties, etc)
let campSchema = new mongoose.Schema({
  campName:{
    type: String,
    required: 'Camp name is Required'
  },
  date:{
    type: String,
    required: 'Date is required'
  },
maxcampers:{
    type: String,
    required: 'Maximum Campers is required'
  }
});

//make the model public
module.exports = mongoose.model('camp', campSchema);
