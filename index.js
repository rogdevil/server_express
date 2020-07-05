const express = require('express');
const bodyParser = require('body-parser');
const InitiateMongoServer = require('./config/databse.js');
const user = require('./routes/user');

// initiate mongo server
InitiateMongoServer()

const app = express();

//Port
const PORT = process.env.PORT || 2000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({message: 'api is working'});
});

// here we have our register user
app.use('/user', user);

app.listen(PORT, (req, res) => {
    console.log(`server is started at ${PORT}`);
});

