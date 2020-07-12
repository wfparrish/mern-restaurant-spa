const mongoose = require('mongoose');

const ProductDisplaySchema = new mongoose.Schema({
 menuItems: [{
   type: mongoose.Schema.Types.ObjectId,
   ref: 'Burger'
  }]
});

module.exports = mongoose.model('ProductDisplay', ProductDisplaySchema);
