const db = require("./db");

const insertInvoiceToDB = (customer_id, subscription_name, start_date, end_date, price) => {
    return db.one(
        "INSERT INTO INVOICE (customer_id, subscription_name, start_date, end_date, amount) VALUES ($1, $2, to_timestamp($3), to_timestamp($4), $5) RETURNING id",
        [
            customer_id, subscription_name, start_date / 1000.0, end_date / 1000.0, price
        ]
    );
}

const getUserInvoicesFromDB = (id) => {
    return db.any(
        "SELECT * FROM INVOICE where customer_id = ($1)",
        [
            id, 
        ]
    );
}

module.exports = { insertInvoiceToDB, getUserInvoicesFromDB }