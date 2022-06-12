const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BeeSchema2 = new Schema({
 
    word: {
    type: String,
    required: true
  },
  centreletter: {
    type: String,
    required: true
  },
  remaininglettersarray: {
    type: Array,
    required: true
  },
  matchingswords: {
    type: Array,
    required: true
  },
  pangrams: {
    type: Array,
    required: true
  }
  
})
module.exports = mongoose.model('Bee', BeeSchema2);