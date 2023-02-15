const express = require('express');
const getProductControler = require('../Controller/product')
const verifyCont = require("../utility/verifyToken")
const router = express.Router();
router.get('/getProducts',getProductControler.getAllProduct);
router.post('/createProduct',verifyCont.verifyToken,verifyCont.verifyTokenAuthourization,verifyCont.verifyTokenAdmin,getProductControler.createProduct);
router.route('/:id')
.get(getProductControler.getOneProduct)
.patch(verifyCont.verifyToken,verifyCont.verifyTokenAuthourization,verifyCont.verifyTokenAdmin,getProductControler.updateProduct)
.delete(verifyCont.verifyToken,verifyCont.verifyTokenAuthourization,verifyCont.verifyTokenAdmin,getProductControler.deleteProduct)
module.exports = router;