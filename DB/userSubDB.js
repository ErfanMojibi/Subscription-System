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



module.exports = {insertSubscriptionForUserToDB}