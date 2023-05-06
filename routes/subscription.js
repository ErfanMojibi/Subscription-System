const express = require('express');
const router = express.Router();
const {createSubscription, buySubscription} = require('../controller/subscriptionController');

router.post('/create', createSubscription);
router.post('/buy', buySubscription);
module.exports = router;