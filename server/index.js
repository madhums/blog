const express = require('express');
const pg = require('pg');
const app = express();
const { PORT, DATABASE_URL, NODE_ENV } = process.env;
const isProduction = NODE_ENV === 'production';

app.get('/', (req, res) => res.send('Hello world 8'));
app.get('/pg', (req, res) => {
  client.query('SELECT $1::text as message', ['Hello world!'], (err, dbres) => {
    client.end();
    res.send(err ? err.stack : dbres.rows[0].message);
  });
});

const client = new pg.Client({
  connectionString: DATABASE_URL,
  ssl: isProduction
});

client
  .connect()
  .then(start)
  .catch(e => console.error('connection error', e.stack));

function start() {
  console.log('Connected to database');
  app.listen(PORT, () => console.log('Express server started on port ', PORT));
}
