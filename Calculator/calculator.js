const express = require("express");
const bodyParser = require("body-parser"); // Corrected the typo
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    // Parse the input values to floats
    let num1 = parseFloat(req.body.num1);
    let num2 = parseFloat(req.body.num2);

    // Check if parsing was successful
    if (isNaN(num1) || isNaN(num2)) {
        res.send("Please enter valid numbers.");
    } else {
        let result = num1 + num2;
        res.send("The calculation is: " + result);
    }
});

app.listen(1000, function () {
    console.log("Server started on port 1000");
});
