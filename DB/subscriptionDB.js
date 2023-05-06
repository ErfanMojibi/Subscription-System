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

const updateIsActiveToDB = async (name, new_value) => {
    console.log(new_value)
    return db.one("UPDATE SUBSCRIPTION SET is_active = ($1) WHERE name = ($2) RETURNING *",
        [
            new_value, name
        ]);
}



module.exports = { insertSubscriptionToDB, getSubscriptionFromDB, updateIsActiveToDB}