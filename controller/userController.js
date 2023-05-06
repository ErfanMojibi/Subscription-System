const {insertUserToDB, getUserFromDB, updateCreditToDB} = require("../DB/userDB");

const createUser = async (req, res) => {
    const username = req.body.username;
    const credit = 0;
    insertUserToDB(username, credit).then(data => {
        res.status(200).json({
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
    getUserFromDB(id).then(data => {
        res.status(200).json({
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
    getUserFromDB(id).then(user => {
        const new_credit = user.credit + incremeant;
        updateCreditToDB(id, new_credit).then(data => {
            res.status(200).json({
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