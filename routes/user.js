const express = require('express');
const router = express.Router();
const {createUser, getUser} = require('../controller/userController');



router.post('/create', createUser);
router.get('/get', getUser);

module.exports = router;