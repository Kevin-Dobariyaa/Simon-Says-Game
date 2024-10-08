const express = require("express");
const path = require("path");
const app = express();

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname, "/public")));



app.all("*",(req,res)=>{
    res.render("simon.ejs");
});

app.listen("8080",(req,res)=>{
    console.log("Listing on port 8080");
});