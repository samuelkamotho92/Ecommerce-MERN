const express = require('express');
const getProductControler = require('../Controller/product')
const router = express.Router();
router.get('/getProducts',getProductControler.getAllProduct);
router.post('/createProduct',getProductControler.getAllProduct)
module.exports = router;