const db = require("./db");

const insertSubscriptionToDB = (name, price) => {
    return db.one(
        "INSERT INTO SUBSCRIPTION (name, price) VALUES ($1, $2) RETURNING name",
        [
            name, price
        ]
    );
}

const getSubscriptionFromDB = async (name) => {
    return db.one(
        "SELECT * FROM CUSTOMER where name = ($1)",
        [
            name
        ]
    );
}



module.exports = { insertSubscriptionToDB, getSubscriptionFromDB}