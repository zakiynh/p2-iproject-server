const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const threadRouter = require('./thread');
const commentRouter = require('./comment');

router.use(authRouter)
router.use('/thread', threadRouter)
router.use('/comments', commentRouter)

module.exports = router;