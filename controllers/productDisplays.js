const ProductDisplay = require('../models/ProductDisplay');

// @desc    Get all productDisplays
// @route   GET /api/v1/productDisplays
// @access  Public
exports.getProductDisplays = async (req, res, next) => {
  try {
    const productDisplays = await ProductDisplay.find();
    res.status(201).json({ success: true, data: productDisplays });
  } catch {
    res.status(400).json({ success: false});
  }
}

// @desc    Get single productDisplay
// @route   GET /api/v1/productDisplays/:id
// @access  Public
exports.getProductDisplay = async (req, res, next) => {
  try {
    const productDisplay = await ProductDisplay.findById(req.params.id);

    if(!productDisplay) {
      return res.status(400).json({ success: false})
    }
    res.status(201).json({ success: true, data: productDisplay });
  } catch {
    res.status(400).json({ success: false});
  }
}

// @desc    Create single productDisplay
// @route   POST /api/v1/productDisplays
// @access  Private
exports.createProductDisplay = async (req, res, next) => {
  try {
 
    const productDisplay = await ProductDisplay.create(req.body);
  
    res.status(201).json({
      success: true,
      data: productDisplay
    });
  } catch {
    res.status(400).json({ success: false});
  }
}

// @desc    Update single productDisplay
// @route   PUT /api/v1/productDisplays/:id
// @access  Private
exports.updateProductDisplay = async (req, res, next) => {
  try {
    const burger = await ProductDisplay.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
  
    if(!productDisplay) {
      return res.status(400).json({success: false});
    }
  
    res.status(200).json({ success: true, data: productDisplay });
  } catch {
    return res.status(400).json({success: false});
  }
}

// @desc    Delete single productDisplay
// @route   DELETE /api/v1/productDisplays/:id
// @access  Public
exports.deleteProductDisplay = async (req, res, next) => {
  try {
    const productDisplay = await ProductDisplay.findByIdAndDelete(req.params.id);
  
    if(!productDisplay) {
      return res.status(400).json({success: false});
    }
  
    res.status(200).json({ success: true, data: {} });
  } catch {
    return res.status(400).json({success: false});
  }
}
