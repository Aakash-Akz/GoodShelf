const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  oneLiner: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Quantity: {
    type: Number,
    required: true,
  },
  sectionName: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
