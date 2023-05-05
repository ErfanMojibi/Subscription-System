const express = require('express');
const router = express.Router();
const {createUser, getUser, increaseCredit} = require('../controller/userController');



router.post('/create', createUser);
router.get('/get', getUser);
router.post('/increase_credit', increaseCredit)

module.exports = router;