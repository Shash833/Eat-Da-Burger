const connection = require("../config/connection.js");

const orm = {
    //Method to retrieve all database entries
    selectAll: function (table, cb) {
        const query = `SELECT * FROM ${table}`
        connection.query(query, function (err, results) {
            if (err) throw err;
            cb(results)
        })
    },
    //Method to create a new databse entry
    insertOne: function (table, columns, values, cb) {
        const query = `INSERT INTO ${table} (${columns}) VALUES (${values})`
        connection.query(query, function (err, results) {
            if (err) throw err;
            cb(results)
        })
    },
    //Method to update a database entry
    updateOne: function (table, columnOne, valueOne, columnTwo, valueTwo, cb) {
        const query = `UPDATE ${table} SET ${columnOne} = ${valueOne} WHERE ${columnTwo} = ${valueTwo}`
        connection.query(query, function (err, results) {
            if (err) throw err;
            cb(results)
        })
    }
}

//Export ORM's
module.exports = orm