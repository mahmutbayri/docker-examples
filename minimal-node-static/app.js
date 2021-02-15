const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.use('/', express.static('static-files'));

app.get('/dynamic-page', (req, res) => {
    return res.send(`This is dynamic page. <br /> ${Date.now()} <br /> <a href="/">Go to home</a>`)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
