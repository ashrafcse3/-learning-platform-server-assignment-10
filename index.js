const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('nodemon later from express / route');
})

app.listen(port, () => {
    console.log(`server port is running on ${port}`);
})