const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
