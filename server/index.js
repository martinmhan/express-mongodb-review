const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const connection = require("../database/");

const server = express();

const port = 3000;

server.use(morgan("dev"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.listen(port, () => console.log(`connected to port ${port}`));
