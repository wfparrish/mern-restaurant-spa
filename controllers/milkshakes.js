const Milkshake = require('../models/Milkshake');

// @desc    Get all milkshakes
// @route   GET /api/v1/milkshakes
// @access  Public
exports.getMilkshakes = async (req, res, next) => {
  try {
    const milkshakes = await Milkshake.find();
    res.status(201).json({ success: true, data: milkshakes });
  } catch {
    res.status(400).json({ success: false});
  }
}
// @desc    Get single milkshake
// @route   GET /api/v1/milkshakes/:id
// @access  Public
exports.getMilkshake = async (req, res, next) => {
  try {
    const milkshake = await Milkshake.findById(req.params.id);

    if(!milkshake) {
      return res.status(400).json({ success: false})
    }

    res.status(201).json({ success: true, data: milkshake });
  } catch {
    res.status(400).json({ success: false});
  }
}

// @desc    Create single milkshake
// @route   POST /api/v1/milkshakes
// @access  Private
exports.createMilkshake = async (req, res, next) => {
  try {
    const milkshake = await Milkshake.create(req.body);
    res.status(201).json({ 
      success: true, 
      data: milkshake
    });
  } catch {
    res.status(400).json({ success: false});
  }
}

// @desc    Update single milkshake
// @route   PUT /api/v1/milkshakes/:id
// @access  Private
exports.updateMilkshake = async (req, res, next) => {
  try {
    const milkshake = await Milkshake.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
  
    if(!milkshake) {
      return res.status(400).json({success: false})
    }
  
    res.status(200).json({ success: true, data: milkshake })
  } catch {
    return res.status(400).json({success: false})
  }
}

// @desc    Delete single milkshake
// @route   DELETE /api/v1/milkshakes/:id
// @access  Public
exports.deleteMilkshake = async (req, res, next) => {
  try {
    const milkshake = await Milkshake.findByIdAndDelete(req.params.id);
  
    if(!milkshake) {
      return res.status(400).json({success: false})
    }
  
    res.status(200).json({ success: true, data: {} })
  } catch {
    return res.status(400).json({success: false})
  }
}
