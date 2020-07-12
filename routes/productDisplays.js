const express = require('express');
const { 
  getProductDisplays, 
  getProductDisplay, 
  createProductDisplay, 
  updateProductDisplay, 
  deleteProductDisplay 
} = require('../controllers/productDisplays');

const router = express.Router();


router.route('/')
  .get(getProductDisplays)
  .post(createProductDisplay);

router.route('/:id')
  .get(getProductDisplay)
  .put(updateProductDisplay)
  .delete(deleteProductDisplay);

module.exports = router;