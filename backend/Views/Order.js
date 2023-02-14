const express = require('express');
const getOrderController = require('../Controller/order')
const router = express.Router();
router.get('/getOrders',getOrderController.getAllOrders);
router.post('/createOrder',getOrderController.createOrder)
module.exports = router;