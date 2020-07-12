const express = require('express');
const { 
  getFries, 
  getFrie, 
  createFrie, 
  updateFrie, 
  deleteFrie 
} = require('../controllers/fries');

const router = express.Router();


router.route('/')
  .get(getFries)
  .post(createFrie);

router.route('/:id')
  .get(getFrie)
  .put(updateFrie)
  .delete(deleteFrie);

module.exports = router;