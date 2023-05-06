const express = require('express');
const router = express.Router();
const {createSubscription} = require('../controller/subscriptionController');

router.post('/create', createSubscription);
module.exports = router;