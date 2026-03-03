const express = require("express");
const app = express();

const port = 8080;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

// 02 using ejs

app.set("view engine", "ejs");

// 03 views directory
// if you are runnig ejs form another directory or folder eg- nodemon EJSdir/index.js
const path = require("path");
app.set("views", path.join(__dirname, "/views"));



app.get("/", (req, res) => {
    res.render("home.ejs");
});