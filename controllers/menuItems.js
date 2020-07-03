// @desc    Get all menuItems
// @route   GET /api/v1/menuItems
// @access  Public
exports.getMenuItems = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all menuItems' });
}

// @desc    Get single menuItem
// @route   GET /api/v1/menuItems/:id
// @access  Public
exports.getMenuItem = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Show menuItem ${req.params.id}` });
}

// @desc    Create new menuItem
// @route   POST /api/v1/menuItems
// @access  Private
exports.createMenuItem = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create new menuItem'});
}

// @desc    Update menuItem
// @route   PUT /api/v1/menuItems/:id
// @access  Private
exports.updateMenuItem = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Update menuItem ${req.params.id}`})
}

// @desc    Get single menuItem
// @route   DELETE /api/v1/menuItems/:id
// @access  Public
exports.deleteMenuItem = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Delete menuItem ${req.params.id}`});
}
