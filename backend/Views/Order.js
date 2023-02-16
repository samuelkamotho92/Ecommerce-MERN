const express = require('express');
const getOrderController = require('../Controller/order');
const verifyCont = require('../utility/verifyToken');
const router = express.Router();
router.get('/getOrders',getOrderController.getAllOrders);
router.post('/createOrder',getOrderController.createOrder);
router.route('/:id')
.post(getOrderController.getOneOrder)
.patch(getOrderController.updateOrder)
.delete(getOrderController.deleteOrder)
router.get('/income',getOrderController.getIncome);
module.exports = router;