const { insertSubscriptionToDB } = require("../DB/subscriptionDB");
const { insertSubscriptionForUserToDB } = require("../DB/userSubDB");

const createSubscription = (req, res) => {
    const name = req.body.name;
    const price = req.body.price;

    insertSubscriptionToDB(name, price).then(data => {
        res.status(200).json({
            message: "Created one subscription",
            data: data
        });
    }).catch(err => {
        res.status(500).json({
            message: "Failed to create subscription"
        });
    })
}


const buySubscription = (req, res) => {
    const user_id = req.body.user_id;
    const subs_name = req.body.subscription_name;
    const end_date = req.body.end_date;
    console.log(end_date)
    console.log(new Date());
    insertSubscriptionForUserToDB(user_id, subs_name, end_date).then(data => {
        res.status(200).json({
            message: "Bouught subscription.",
            data:data
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            message: "Failed to buy subscription.",
        })
    })
}

module.exports = { createSubscription, buySubscription }