const db = require("../DB/db");


const createSubscriptionToDB = (name, price) => {
    return db.one(
        "INSERT INTO SUBSCRIPTION (name, price) VALUES ($1, $2) RETURNING name",
        [
            name, price
        ]
    );
}

const createSubscription = (req, res) => {
    const name = req.body.name;
    const price = req.body.price;

    createSubscriptionToDB(name, price).then(data => {
        res.status(201).json({
            message: "Created one subscription",
            data: data
        });
    }).catch(err => {
        res.status(500).json({
            message: "Failed to create subscription"
        });
    })
}

module.exports = {createSubscription, }