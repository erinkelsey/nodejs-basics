/**
 * Setup and initialization.
 */
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

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
  const data = {
    members: [
      {
        email_address: req.body.email,
        status: "subscribed",
        merge_fields: {
          FNAME: req.body.firstName,
          LNAME: req.body.lastName,
        },
      },
    ],
  };

  const jsonData = JSON.stringify(data);
  const url = `https://${process.env.MAILCHIMP_SERVER_ID}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_AUDIENCE_ID}`;
  // console.log(url);

  // username:api_key -> you can have ANYTHING for username
  const options = {
    method: "POST",
    auth: `something:${process.env.MAILCHIMP_API_KEY}`,
  };

  const request = https.request(url, options, (response) => {
    response.on("data", (data) => {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();
});

/**
 * Start up server to listen on port 3000.
 */
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
