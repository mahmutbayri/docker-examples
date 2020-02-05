const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;
const db = mysql.createConnection({
    host: 'mysql',
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

app.get('/', (req, res) => {
    if (req.query.error) {
        res.send(req.query.error);
        return;
    }
    res.send('Hello World!');
});

app.get('/db', (req, res) => {
    db.query('SELECT 1 + 1 AS solution', (err, result) => {
        if (err) {
            res.redirect('/?error=' + err.message);
            return;
        }
        res.send('<h1>The solution is: ' + result[0].solution + '</h1>');
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
