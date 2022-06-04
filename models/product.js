const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  // title: String,
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  short_des: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  discount: {
    type: String,
    required: true
  },
  selling_price: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: false
  },
  size: {
    type: Array,
    required: false
  },
  stock: {
    type: String,
    required: false
  },
  categories: {
    type: Array,
    required: false
  },
  
})
module.exports = mongoose.model('Product', ProductSchema);