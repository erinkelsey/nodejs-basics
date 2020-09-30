/**
 * Setup and initialization.
 */
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
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
 * Calculates the sum of the two numbers received from
 * the frontend form, and sends back the result.
 */
app.post("/", (req, res) => {
  const num1 = +req.body.num1;
  const num2 = +req.body.num2;

  const result = num1 + num2;

  res.send("The result of the calculation: " + result);
});

/**
 * Start up server to listen on port 3000.
 */
app.listen(3000, () => {
  console.log("server started on port 3000.");
});
