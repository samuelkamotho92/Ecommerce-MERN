const express = require('express');
const getUserControler = require('../Controller/user')
const verifyUtility = require('../utility/verifyToken')
const {verifyTokenAuthourization} = require('../utility/verifyToken')
const router = express.Router();
router.get('/getUser',verifyUtility.verifyToken,verifyUtility.verifyTokenAuthourization,verifyUtility.verifyTokenAdmin,getUserControler.getAllUsers);
router.post('/createUser',getUserControler.createUser)
router.route('/:id')
.get(verifyUtility.verifyToken,verifyUtility.verifyTokenAuthourization,getUserControler.getOneUser)
.patch(verifyUtility.verifyToken,verifyUtility.verifyTokenAuthourization,getUserControler.update)
.delete(verifyUtility.verifyToken,verifyUtility.verifyTokenAuthourization,verifyUtility.verifyTokenAdmin,getUserControler.delete)
module.exports = router;