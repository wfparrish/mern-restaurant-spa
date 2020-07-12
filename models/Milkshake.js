const mongoose = require('mongoose');

const MilkshakeSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Milkshake', MilkshakeSchema);