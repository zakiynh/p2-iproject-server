const express = require('express');
const Controller = require('../controllers/threadController');
const threadRouter = express.Router();
const auth = require('../middlewares/authen');

threadRouter.get('/', Controller.fetchThread);
threadRouter.post('/add', auth, Controller.createThread);
threadRouter.get('/:id', Controller.detailThread);
threadRouter.delete('/delete/:id', auth, Controller.deleteThread);

module.exports = threadRouter