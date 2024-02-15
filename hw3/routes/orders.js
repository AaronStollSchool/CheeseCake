var express = require('express');
var router = express.Router();

// Create phony order data js object
const obj = [
    {topping: "Cherry", quantity: 2},
    {topping: "Plain", quantity: 6},
    {topping: "Chocolate", quantity: 4}
];
const myJSON = JSON.stringify(obj);     //convert js object to JSON

var month = "";

/* POST orders listing. */
router.post('/', function(req, res, next) {
    month = req.body;                           //read what month was sent (doesnt do anything rn)
    res.send(myJSON);                           //send JSON object to /orders
});

module.exports = router;
