// Views Directory

// const path = require("path");
// app.set("views", path.join(_dirname, "/views"));

// 03 views directory
// if you are runnig ejs form another directory or folder eg- nodemon EJSdir/index.js
const path = require("path");
app.set("views", path.join(__dirname, "/views"));
