const orm = require("../config/orm")

const burger = {
    //Call 'selectAll' ORM function to retrieve all burger entries
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res)
        })
    },
    //'insertOne' ORM function to create new burger entry
    insertOne: function (name, cb) {
        orm.insertOne("burgers", "burger_name, devoured", `"${name}", false`, function (res) {
            cb(res)
        })
    },
    //'updateOne' ORM function to update burger's 'devoured' status to true
    updateOne: function (id, cb) {
        orm.updateOne("burgers", "devoured", true, "id", `${id}`, function (res) {
            cb(res)
        })
    }
}

//export burger models
module.exports = burger