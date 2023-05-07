const express = require("express");
const router = express.Router();
const {createUser, getUser, increaseCredit, getUserInvoices, getUserSubsriptions} = require("../controller/userController");




router.post('/create', createUser);
router.get('/get', getUser);
router.post('/increase_credit', increaseCredit);
router.get('/invoices', getUserInvoices);
router.get('/subscriptions', getUserSubsriptions)

router.get('/', (req, res) => {
    res.send("endpoints: /create, /get, /increase_credit, /invoices");
})


module.exports = router;