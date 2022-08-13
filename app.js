const express = require("express");
const path = require("path");
const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
app.listen(3000, function () {
  console.log("Server is running on localhost 3000");
});

app.use(express.static("public"));
