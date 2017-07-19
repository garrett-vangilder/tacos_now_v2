const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const promisify = require('es6-promisify');
const expressValidator = require('express-validator');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  req.login = promisify(req.login, req);
});

module.exports = app;
