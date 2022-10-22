const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

//Import middleware fo JWT auth
const auth = require("./middleware/auth");

const {
	devopsRoutes
} = require('./routes');

const app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/DevOps', auth, devopsRoutes);

// add app listener
module.exports = app;

