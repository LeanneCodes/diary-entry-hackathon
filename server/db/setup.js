require('dotenv').config()
const fs = require('fs')

const db = require('./connect')
const sql = fs.readFileSync('./server/db/entries.sql', 'utf-8')

db.query(sql)
    .then((data) => {
        db.end()
        console.log('Setupu complete')
    })
    .catch ((error) => console.log(error))