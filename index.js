const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

const coursesTitle = require('./data/coursesTitles.json');
const coursesDetails = require('./data/coursesDetails.json');

app.get('/', (req, res) => {
    res.send('nodemon later from express / route');
})

app.get('/courses-title', (req, res) => {
    res.send(coursesTitle);
})

app.get('/courses-details', (req, res) => {
    res.send(coursesDetails);
})

app.listen(port, () => {
    console.log(`server port is running on ${port}`);
})