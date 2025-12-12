const express = require('express');
const cors = require('cors');
const entryRouter = require('./routers/entries');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/entries', entryRouter);

module.exports = app