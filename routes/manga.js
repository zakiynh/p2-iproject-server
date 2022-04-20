const express = require('express');
const Controller = require('../controllers/mangaController');
const mangaRouter = express.Router();
const auth = require('../middlewares/authen');

// mangaRouter.get('/', (req, res) => res.redirect('/manga'));

mangaRouter.get('/manga', Controller.fetchManga);

module.exports = mangaRouter