const express = require("express");
const app = express();  // after aquiring express whatever this fuction returns we store that in this app object

let port = 8080;

// app object have specific method called listen, it creates a web server that leitens for incomming api request

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

// You can send only one response (res.send(), res.json(), etc.)

app.get("/", (req, res) => {;
    res.send("Hello, I'm root");
});
app.get("/apple", (req, res) => {
    res.send("you contacted apple path");
});
app.get("/orange", (req, res) => {
    res.send("you contacted ornage path");
});

// mam tough this but it doesnt woek in expres 5
// app.get("*", (req, res) => {
//     res.send("this path doesnt exist, usnt another path"); 
// });
// alternative form chatgpt
// 404 handler (Express 5 compatible)
// app.use((req, res) => {
//     res.status(404).send("this path doesn't exist");
// });


app.post("/", (req, res) => {
    res.send("you sent a post request to the root");
});

// app.use((req, res) => {
//     console.log("request received");
//     // res.send({
//     //     name : "Apple",
//     //     color : "red"
//     // },);
//     let code = "<h1>Fruits</h1><ul><li>Apple</li><li>Orange</li></ul>";
//     res.send(code);
// });


// 08 path parameters
// http://localhost:8080/apnacollege/123

app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    let htmlString = `<h1>Welcome to the page of ${username}</h1>`;
    res.send(htmlString);
});

// 09 query strings
// http://localhost:8080/search?q="apple"&color="green"

app.get("/search", (req,res) => {
    let {q} = req.query;
    if (!q) {  // http://localhost:8080/search?q=
        res.send("<h1>noting searched</h1>");   
    }
    res.send(`<h1>search results for query ${q}</h1>`); // http://localhost:8080/search?q=apple
});

