// initialize an express app and set it up
const express = require('express');
const app = express();
const io = require('socket.io')();

// set some config
const port = process.env.PORT || 3000;

// Tell our app to use the public folder for static files
app.use(express.static('public'));

// This will be the route we will use
app.get('/', (req, res, next) => {
    res.sendFile(__dirname + "/views/index.html");
});

// create server variable for socket.io to use
const server = app.listen(port, () => {
    console.log(`app is running on port ${port}`);
});