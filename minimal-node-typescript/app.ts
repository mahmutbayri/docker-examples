import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World TypeScript (ts-node)!');
});

app.listen(port, () => console.log(`Example TypeScript app listening on port ${port}!`));
