const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WordsFound = new Schema({
 
  gamedate: {
    type: String,
   // required: true
  },
  userid: {
    type: String,
   // required: true
  },
  wordsFoundArray: {
    type: Array,
    required: true
  }
},
{timestamps: true}
);
module.exports = mongoose.model('WordsFound', WordsFound);