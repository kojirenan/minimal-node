import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Building Server!!');
});

app.listen(3030);
