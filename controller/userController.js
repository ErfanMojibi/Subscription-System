const db = require("../DB/db");
const insertCustomer = async (username, credit) => {
    return db.one(
        "INSERT INTO CUSTOMER (username, credit) VALUES ($1, $2) RETURNING id",
        [
            username, credit
        ]
    );
}

const getCustomer = async (id) => {
    return db.one(
        "SELECT * FROM CUSTOMER where id = ($1)",
        [
            id
        ]
    );
}
const createUser = async (req, res) => {
    const username = req.body.username;
    const credit = 0;
    insertCustomer(username, credit).then(data => {
        res.status(201).json({
            message: "Created one user",
            data: data
        })
    }).catch(err => {
        console.log(err)
        res.status(500).json({
            message: "Failed to insert user",
        })
    });
}

const getUser = async (req, res) => {
    const id = req.query.id;
    getCustomer(id).then(data => {
        res.status(201).json({
            message: "Found successfuly",
            data: data
        })
    }).catch(err => { 
        res.status(500).json({
            message: "Failed to get user",
        })
    })
}

module.exports = { createUser, getUser }