const express = require('express');
const Controller = require('../controllers/authController');
const authRouter = express.Router();

authRouter.post('/signup', Controller.signup);
authRouter.post('/signin', Controller.signin);

module.exports = authRouter