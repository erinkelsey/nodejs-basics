const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const num1 = +req.body.num1;
  const num2 = +req.body.num2;

  const result = num1 + num2;

  res.send("The result of the calculation: " + result);
});

app.listen(3000, () => {
  console.log("server started on port 3000.");
});
