const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

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