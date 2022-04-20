const express = require('express');
const Controller = require('../controllers/threadController');
const mangaRouter = express.Router();
const auth = require('../middlewares/authen');

router.get('/', (req, res) => res.redirect('/manga'));

router.get('/manga', Controller.fetchManga);

module.exports = mangaRouter