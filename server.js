const express = require('express');
const app = express();

const { PORT } = process.env;

app.get('/', (req, res) => res.send('Hello world 6'));

app.listen(PORT, () => console.log('Express server started on port ', PORT));
