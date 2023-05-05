const db = require("../DB/db");
const insertCustomerToDB = async (username, credit) => {
    return db.one(
        "INSERT INTO CUSTOMER (username, credit) VALUES ($1, $2) RETURNING id",
        [
            username, credit
        ]
    );
}

const getCustomerFromDB = async (id) => {
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


const createUser = async (req, res) => {
    const username = req.body.username;
    const credit = 0;
    insertCustomerToDB(username, credit).then(data => {
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
    getCustomerFromDB(id).then(data => {
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

const increaseCredit = async (req, res) => {
    const id = req.body.id;
    const incremeant = req.body.incremeant;
    getCustomerFromDB(id).then(data => {
        const new_credit = data.credit + incremeant;
        updateCreditToDB(id, new_credit).then(data => {
            res.status(201).json({
                message: "Update credit successfuly",
                data: data
            })
        }).catch(err => {
            res.status(500).json({
                message: "Failed to update credit",
            })
        })
    }).catch(err => {
        res.status(500).json({
            message: "Failed to update credit",
        })
    })

}
module.exports = { createUser, getUser, increaseCredit }