const express = require('express');
const getCartController = require('../Controller/cart')
const router = express.Router();
router.get('/getCart',getCartController.getAllCartItems);
router.post('/createUser',getCartController.createCartItems)
module.exports = router;