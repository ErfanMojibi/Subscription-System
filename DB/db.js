require("dotenv").config();
const pgp = require("pg-promise")({});

const cn = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};
const db = pgp(cn);
db.connect()
    .then(obj => {
        console.log("Connected to PostgreSQL database.");
        obj.done(); // release the connection back to the pool
    })
    .catch(error => {
        console.error("Error connecting to PostgreSQL database.", error.message);
    });
module.exports = db;