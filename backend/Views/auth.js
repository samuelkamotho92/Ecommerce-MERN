const express = require('express');
const authController = require('../Controller/auth');
const router = express.Router();
router.post('/register',authController.registerUser);
router.post('/login',authController.login);
module.exports = router