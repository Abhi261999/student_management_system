const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Welcome to my School Management System');
    })


//Import the routes file
const studentRoutes = require('./routes/studentRoutes');

// Use the routes file
app.use('/student',  studentRoutes);







app.listen(3000, () => {
    console.log('listening on port 3000');
})