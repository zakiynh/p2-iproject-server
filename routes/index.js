const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const threadRouter = require('./thread');
const commentRouter = require('./comment');
const mangaRouter = require('./manga');

router.use(authRouter)
router.use('/thread', threadRouter)
router.use('/comments', commentRouter)
router.use('/manga', mangaRouter)

module.exports = router;