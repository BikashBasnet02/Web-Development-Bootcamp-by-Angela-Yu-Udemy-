const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

let items = ["Buy Food", "Cook Food", "Eat Food"];

app.get("/", function(req, res) {
    var today = new Date();
    var options = { weekday: 'long' };
    var day = today.toLocaleDateString("en-US", options);

    res.render("list", { kindofday: day, newListItems: items });
});

app.post("/", function(req, res) {
    let item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.listen(2000, function() {
    console.log("Server started on port 2000");
});
