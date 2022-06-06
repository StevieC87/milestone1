const mongoose = require('mongoose');
const Schema2 = mongoose.Schema;

const BeeSchema2 = new Schema2({
 
    word: {
    type: String,
    required: true
  },
  centerletter: {
    type: Number,
    required: true
  },
  arrayofword: {
    type: Array,
    required: true
  }
  
})
module.exports = mongoose.model('Bee', BeeSchema2);