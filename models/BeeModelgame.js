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
/*   matchingswords: {
    type: Array,
    required: false
  }, */
  remaininglettersarray: {
    type: Array,
    required: true
  },
  pangrams: {
    type: Array,
    required: true
  },
  matchingwords2 : {
    type: Array,
    required: true
  },
  dateplay: {
    type: String,
    default: ''
  }

 
  
})
module.exports = mongoose.model('Bee', BeeSchema2);