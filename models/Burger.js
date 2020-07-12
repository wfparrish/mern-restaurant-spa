const mongoose = require('mongoose');

const BurgerSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number
  }
});

module.exports = mongoose.model('Burger', BurgerSchema);
