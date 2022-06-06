const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

//import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute)

//Routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true}, 
    () => console.log('connected to DB'));

app.listen(3000);