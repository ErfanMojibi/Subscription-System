
require("dotenv").config();

const express = require('express');

const app = express();


// to parse json
app.use(express.json());

const userRouter = require('./routes/user');
const subscriptionRouter = require('./routes/subscription');

app.use('/user', userRouter);
app.use('/subscription', subscriptionRouter);


app.get('/', (req, res) => {
    res.send("endpoints: /user, /subscription");
});

app.listen(process.env.LISTEN_PORT | 3000, () => {
    console.log("server is listening on port :)");    
});