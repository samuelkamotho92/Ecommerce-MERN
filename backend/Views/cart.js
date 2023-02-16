const express = require('express');
const getCartController = require('../Controller/cart')
const router = express.Router();
router.get('/getCart',getCartController.getAllCartItems);
router.post('/createCart',getCartController.createCartItems)
router.route('/:id')
.get(getCartController.getOneCart)
.patch(getCartController.updateCart)
.delete(getCartController.deleteCart)
module.exports = router;