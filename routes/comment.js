const express = require('express');
const Controller = require('../controllers/commentController');
const commentRouter = express.Router();
const auth = require('../middlewares/authen');

commentRouter.post("/:threadId", auth, Controller.addComment);
commentRouter.delete("/:threadId/:commentId", auth, Controller.deleteComment);

module.exports = commentRouter