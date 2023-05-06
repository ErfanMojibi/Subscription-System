const db = require("./db");

const insertInvoiceToDB = (customer_id, subscription_name, start_date, end_date, price) => {
    return db.one(
        "INSERT INTO INVOICE (customer_id, subscription_name, start_date, end_date, amount) VALUES ($1, $2, to_timestamp($3), to_timestamp($4), $5, $6) RETURNING id",
        [
            customer_id, subscription_name, start_date, end_date, price
        ]
    );
}

module.exports = { insertInvoiceToDB }