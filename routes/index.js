const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const threadRouter = require('./thread');

router.use(authRouter)
router.use('/thread', threadRouter)

module.exports = router;