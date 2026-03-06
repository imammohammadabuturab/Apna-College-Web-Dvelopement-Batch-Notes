const express = require("express");
const app = express();
const path = require("path");
const port = 8080;


// 10
// app.use(express.static("public")); // to use css file,if not wroking then use this below for using muliple dir
app.use(express.static(path.join(__dirname, "/public/js")));
app.use(express.static(path.join(__dirname, "/public/css")));

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

// 02 using ejs

app.set("view engine", "ejs");

// 03 views directory
// if you are runnig ejs form another directory or folder eg- nodemon EJSdir/index.js

app.set("views", path.join(__dirname, "/views"));



app.get("/", (req, res) => {
    res.render("home.ejs");
});

// 05 Passing data to ejs
// call this using http://localhost:8080/rolldice
app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1 // assume this comes form database
    res.render("rolldice.ejs", { diceVal});
});

// 06

// app.get("/ig/:username", (req, res) => {
//     const followers = ["bob", "adam", "steve", "abc"];
//     let {username} = req.params;
//     res.render("instagram.ejs", {username, followers});
// });

// 09

app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if (data) {
        res.render("instagram.ejs", {data});
    } else
        res.render("error.ejs")
});
