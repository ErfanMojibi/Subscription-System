const db = require("./db");
const insertUserToDB = async (username, credit) => {
    return db.one(
        "INSERT INTO CUSTOMER (username, credit) VALUES ($1, $2) RETURNING id",
        [
            username, credit
        ]
    );
}

const getUserFromDB = async (id) => {
    return db.one(
        "SELECT * FROM CUSTOMER where id = ($1)",
        [
            id
        ]
    );
}
const updateCreditToDB = async (id, new_value) => {
    console.log(new_value)
    return db.one("UPDATE CUSTOMER SET credit = ($1) WHERE id = ($2) RETURNING credit",
        [
            new_value,
            id
        ]);
}


module.exports = { insertUserToDB, getUserFromDB, updateCreditToDB}