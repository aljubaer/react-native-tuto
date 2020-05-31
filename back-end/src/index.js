import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome');
})

app.listen(3000, (error) => {
    if (error) {
        console.log(error);
    }
    console.log(`Server listening on port 3000`)
});

// 10:00