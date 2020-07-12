const express = require('express');
const { 
  getBurgers, 
  getBurger, 
  createBurger, 
  updateBurger, 
  deleteBurger 
} = require('../controllers/burgers');

const router = express.Router();


router.route('/')
  .get(getBurgers)
  .post(createBurger);

router.route('/:id')
  .get(getBurger)
  .put(updateBurger)
  .delete(deleteBurger);

module.exports = router;