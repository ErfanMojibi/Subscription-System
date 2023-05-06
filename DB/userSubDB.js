const db = require("./db");

const insertSubscriptionForUserToDB = (customer_id, subs_name, end_date, ) => {
    return db.one(
        "INSERT INTO CUSTOMER_SUBSCRIPTION (customer_id, subscription_name, start_date, end_date, is_active) VALUES ($1, $2, to_timestamp($3), $4, $5) RETURNING *",
        [
            customer_id,
            subs_name,
            (new Date()) / 1000.0,
            end_date,
            false
        ]
    );
}

const updateIsActiveToDB = async (customer_id, subscription_name, new_value) => {
    return db.one("UPDATE CUSTOMER_SUBSCRIPTION SET is_active = ($1) WHERE subscription_name = ($2) and customer_id = ($3) RETURNING *",
        [
            new_value, subscription_name, customer_id
        ]);
}

const getUserSubFromDB = async (customer_id, subscription_name) => {
    return db.one("SELECT * FROM CUSTOMER_SUBSCRIPTION WHERE customer_id = ($1) and subscription_name = ($2)",
        [
            customer_id, subscription_name
        ]);
}


module.exports = {insertSubscriptionForUserToDB, updateIsActiveToDB, getUserSubFromDB}