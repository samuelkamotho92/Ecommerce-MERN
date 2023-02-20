const express = require('express');
const stripeCont = require('../Controller/payments');
const router = express.Router();
router.route('/payments')
.post(stripeCont.stripePayments);

module.exports = router;