const Frie = require('../models/Frie');

// @desc    Get all fries
// @route   GET /api/v1/fries
// @access  Public
exports.getFries = async (req, res, next) => {
  try {
    const fries = await Frie.find();
    res.status(201).json({ success: true, data: fries });
  } catch {
    res.status(400).json({ success: false});
  }
}

// @desc    Get single frie
// @route   GET /api/v1/fries/:id
// @access  Public
exports.getFrie = async (req, res, next) => {
  try {
    const frie = await Frie.findById(req.params.id);

    if(!frie) {
      return res.status(400).json({ success: false})
    }
    
    res.status(201).json({ success: true, data: frie });
  } catch {
    res.status(400).json({ success: false});
  }
}

// @desc    Create single frie
// @route   POST /api/v1/fries
// @access  Private
exports.createFrie = async (req, res, next) => {
  try {
    const frie = await Frie.create(req.body);
  
    res.status(201).json({ 
      success: true, 
      data: frie
    });
  } catch {
    res.status(400).json({ success: false});
  }
}

// @desc    Update single frie
// @route   PUT /api/v1/fries/:id
// @access  Private
exports.updateFrie = async (req, res, next) => {
  try {
    const frie = await Frie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
  
    if(!frie) {
      return res.status(400).json({success: false});
    }
  
    res.status(200).json({ success: true, data: frie });
  } catch {
    return res.status(400).json({success: false});
  }
}

// @desc    Delete single frie
// @route   DELETE /api/v1/fries/:id
// @access  Public
exports.deleteFrie = async (req, res, next) => {
  try {
    const frie = await Frie.findByIdAndDelete(req.params.id);
  
    if(!frie) {
      return res.status(400).json({success: false});
    }
  
    res.status(200).json({ success: true, data: {} });
  } catch {
    return res.status(400).json({success: false});
  }
}