const express = require('express');
const getProductControler = require('../Controller/product')
const verifyCont = require("../utility/verifyToken")
const router = express.Router();
//verifyCont.verifyToken,verifyCont.verifyTokenAuthourization,verifyCont.verifyTokenAdmin,
router.get('/getProducts',getProductControler.getAllProduct);
router.post('/createProduct',getProductControler.createProduct);
router.route('/:id')
.get(getProductControler.getOneProduct)
.patch(verifyCont.verifyToken,verifyCont.verifyTokenAuthourization,verifyCont.verifyTokenAdmin,getProductControler.updateProduct)
.delete(verifyCont.verifyToken,verifyCont.verifyTokenAuthourization,verifyCont.verifyTokenAdmin,getProductControler.deleteProduct)
module.exports = router;