const mongoose = require('mongoose');

const FrieSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number
  },
  size: {
    type: String
  }
});

module.exports = mongoose.model('Frie', FrieSchema);