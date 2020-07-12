const express = require('express');
const { 
  getMilkshakes, 
  getMilkshake, 
  createMilkshake, 
  updateMilkshake, 
  deleteMilkshake 
} = require('../controllers/milkshakes');

const router = express.Router();


router.route('/')
  .get(getMilkshakes)
  .post(createMilkshake);

router.route('/:id')
  .get(getMilkshake)
  .put(updateMilkshake)
  .delete(deleteMilkshake);

module.exports = router;