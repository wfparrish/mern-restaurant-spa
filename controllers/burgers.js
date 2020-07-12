const Burger = require('../models/Burger');

// @desc    Get all burgers
// @route   GET /api/v1/burgers
// @access  Public
exports.getBurgers = async (req, res, next) => {
  try {
    const burgers = await Burger.find();
    res.status(201).json({ success: true, data: burgers });
  } catch {
    res.status(400).json({ success: false});
  }
}

// @desc    Get single burger
// @route   GET /api/v1/burgers/:id
// @access  Public
exports.getBurger = async (req, res, next) => {
  try {
    const burger = await Burger.findById(req.params.id);

    if(!burger) {
      return res.status(400).json({ success: false})
    }
    res.status(201).json({ success: true, data: burger });
  } catch {
    res.status(400).json({ success: false});
  }
}

// @desc    Create single burger
// @route   POST /api/v1/burgers
// @access  Private
exports.createBurger = async (req, res, next) => {
  try {
    const burger = await Burger.create(req.body);
  
    res.status(201).json({
      success: true,
      data: burger
    });
  } catch {
    res.status(400).json({ success: false});
  }
}

// @desc    Update single burger
// @route   PUT /api/v1/burgers/:id
// @access  Private
exports.updateBurger = async (req, res, next) => {
  try {
    const burger = await Burger.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
  
    if(!burger) {
      return res.status(400).json({success: false});
    }
  
    res.status(200).json({ success: true, data: burger });
  } catch {
    return res.status(400).json({success: false});
  }
}

// @desc    Delete single burger
// @route   DELETE /api/v1/burgers/:id
// @access  Public
exports.deleteBurger = async (req, res, next) => {
  try {
    const burger = await Burger.findByIdAndDelete(req.params.id);
  
    if(!burger) {
      return res.status(400).json({success: false});
    }
  
    res.status(200).json({ success: true, data: {} });
  } catch {
    return res.status(400).json({success: false});
  }
}
