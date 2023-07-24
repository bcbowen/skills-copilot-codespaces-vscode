// Create web server

// Import express
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Create a route for getting all comments
router.get('/', commentController.getAllComments);

// Create a route for getting a comment by id
router.get('/:id', commentController.getCommentById);

// Create a route for creating a comment
router.post('/', commentController.createComment);

// Create a route for updating a comment
router.put('/:id', commentController.updateComment);

// Create a route for deleting a comment
router.delete('/:id', commentController.deleteComment);

// Export the router
module.exports = router;


