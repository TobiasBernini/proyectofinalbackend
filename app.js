const express = require('express');
const logeer = require('morgan');
const cors = require('cors');

const app = express();

app.use(logeer('dev'));
app.use(express.json());
app.use(cors());

const { connect } = require('./db/db');

const indexRouter = require('./routers/index');
const apiRouter = require('./routers/api');


app.use('/', indexRouter);
app.use('/V1', apiRouter);

connect();

module.exports = app;