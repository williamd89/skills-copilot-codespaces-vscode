// Create web server

// Import express
const express = require('express');
const router = express.Router();

// Import controller
const commentController = require('../controllers/commentController');

// Import middleware
const auth = require('../middleware/auth');

// @route   GET api/comments
// @desc    Get all comments
// @access  Public
router.get('/', commentController.getComments);

// @route   POST api/comments
// @desc    Add new comment
// @access  Private
router.post('/', auth, commentController.addComment);

// @route   PUT api/comments/:id
// @desc    Update comment
// @access  Private
router.put('/:id', auth, commentController.updateComment);

// @route   DELETE api/comments/:id
// @desc    Delete comment
// @access  Private
router.delete('/:id', auth, commentController.deleteComment);

module.exports = router;