const express = require("express")
const burger = require("../models/burger")
const router = express.Router();

//GET Route to display all burgers
router.get("/", function (req, res) {
    //call 'selectAll' method to retrieve all database entries
    burger.selectAll(function (data) {
        const db = {
            burgers: data
        };
        console.log(db);
        res.render("index", db);
    });
});

//POST route
router.post("/api/burgers", function (req, res) {
    //call 'insertOne' method to create new database entry
    burger.insertOne(
        req.body.burgerName
        , function (result) {
            res.json(result);
        });
});

//PUT route
router.put("/api/burgers/:id", function (req, res) {
    //call 'updateOne' method to update existing database entry
    burger.updateOne(
        req.params.id, function (result) {
            res.json(result)
        }
    );
});

//Export routes
module.exports = router;
