const express = require('express');
const { Model } = require('objection');
const db = require('./config/db');

const app = express();
const { PORT } = process.env;

Model.knex(db);

const v1 = require('./config/routes');
app.use('/api/v1', v1);

function start() {
  console.log('Connected to database');
  app.listen(PORT, () => console.log('Express server started on port ', PORT));
}

start();
