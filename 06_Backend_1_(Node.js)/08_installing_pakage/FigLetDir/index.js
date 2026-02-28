const figlet = require("figlet");

figlet("IMAM MOHAMMAD ABUTURAB", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});