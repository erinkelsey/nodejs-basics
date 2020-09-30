/**
 * Setup and initialization.
 */
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * GET Method for main route.
 *
 * Sends back the index.html to render as the page.
 */
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

/**
 * POST method for main route.
 *
 */
app.post("/", (req, res) => {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;

  console.log(firstName);
});

/**
 * Start up server to listen on port 3000.
 */
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
