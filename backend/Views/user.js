const express = require('express');
const getUserControler = require('../Controller/user')
const verifyUtility = require('../utility/verifyToken')
const {verifyTokenAuthourization} = require('../utility/verifyToken')
const router = express.Router();
//verifyUtility.verifyToken,verifyUtility.verifyTokenAuthourization,verifyUtility.verifyTokenAdmin,
//verifyUtility.verifyToken,verifyUtility.verifyTokenAuthourization,verifyUtility.verifyTokenAdmin,
router.get('/stats',getUserControler.getStats)
router.get('/getUser',getUserControler.getAllUsers);
router.post('/createUser',getUserControler.createUser)
router.route('/:id')
.get(getUserControler.getOneUser)
.patch(getUserControler.update)
.delete(getUserControler.delete)


module.exports = router;