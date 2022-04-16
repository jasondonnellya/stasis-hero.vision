///////////////////////////////////////////////////////////////
// Setup
///////////////////////////////////////////////////////////////
const config = require('./config/' + (process.env.NODE_ENV || 'development') + '.json');
const express = require('express');
const app = express(); // create express app

const path = require('path');
app.use(express.static(path.join(__dirname, '..', 'build')));
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
// Game Logic
///////////////////////////////////////////////////////////////


// import and  code all game logic here


///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
// Listen
///////////////////////////////////////////////////////////////
const port = config.PORT;
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
///////////////////////////////////////////////////////////////