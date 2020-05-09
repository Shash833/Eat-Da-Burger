// Set up MySQL connection.
const mysql = require("mysql");
require("dotenv").config()

let connection;
//To connect to JAWSDB or local host
if (process.env.DB_CONNECTION_STRING) {
    connection = mysql.createConnection(process.env.DB_CONNECTION_STRING);
} else {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,//User to add password if using local host
        database: process.env.DB_NAME
    })
}

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//Export connection
module.exports = connection;
