const express = require("express");
const router = express.Router();
const {createSubscription, buySubscription, activateSubscription} = require("../controller/subscriptionController");

router.post('/create', createSubscription);
router.post('/buy', buySubscription);
router.post('/activate', activateSubscription)
module.exports = router;