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

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    // const selectedCourse = coursesDetails.find(course => course.id === id);
    // This selected course should be get by using the find method, but when I tried like this I got an undefined value instead of getting a matched result.
    const selectedCourse = coursesDetails[id - 1]
    res.send(selectedCourse);
})

app.listen(port, () => {
    console.log(`server port is running on ${port}`);
})