const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("<h1>hello</h1>");
});
app.get("/contact", function(req, res){
    res.send("Contact me:aa@gmail.com");
});
app.get("/about", function(req, res){
    res.send("About me: Something");
});
app.listen(3000, function(){
    console.log("Server started on port 3000");
});
