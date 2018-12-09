// TODO
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routes.js');

// const connection = require('../database/index.js');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', router);

app.listen(PORT, (err) => {
  if (err) {
    console.error(`Could not connect to port ${PORT}`);
  } else {
    console.log(`Successfully connected to port ${PORT}`);
  }
});