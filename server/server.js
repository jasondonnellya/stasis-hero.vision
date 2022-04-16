/**
  * * Setup
  */
const config = require('./config/' + (process.env.NODE_ENV || 'development') + '.json');
const express = require('express');
const app = express(); // create express app

const path = require('path');
app.use(express.static(path.join(__dirname, '..', 'build')));
/**/


/**
  * ? Game
  */


// import and  code all game logic here


/**/


/**
  * ! Testing 
  */
app.get('/test', (req, res) => {
  res.send(`
    express is running

    <br><br>
    NODE_ENV: ${process.env.NODE_ENV}
  `)
});
/**/


/**
  * ! 404 Catch all
  */
app.get('*', function(req, res){
  res.status(302).redirect('/');
});
/**/


/**
  * * Port
  */
const port = config.PORT;
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
/**/