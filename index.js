/**
 *
 * Author:  Abdur Rafay
 * Description: NODE js application setting
 *
 * */
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const cors = require("cors");
const port = 9000;
const address = "127.0.0.1";

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/** API routes */
app.use(routes);

app.listen(port, () =>
  console.log(`Server running on http://${address}:${port}`)
);
