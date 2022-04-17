/** This project uses Better Comments VSCode extension, please install in your VSCode extensions to view correct comment syntax.
  * * Setup, Enviromnment & Middleware
  */
const isDev = process.env.NODE_ENV !== 'production';
const config = require('./config/' + (process.env.NODE_ENV) + '.json');
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const app = express(); // create express app
const path = require('path');

app.use(compression());
app.use(cors({
  origin: isDev ? 'http://localhost:3000' : 'https://vision.stasishero.com'
}));
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
app.get('/api-test', (req, res) => {
  res.json({
    api: 'Reminder!!: Make sure to destructure data correctly as it helps keep code clean :)'
  })
});
/**/
 
 
/**
  * ! 404 Catch all redirect to Homepage
  */
app.get('*', function(req, res){
  res.status(302).redirect('/');
});
/**/
 
 
/**
  * * Start Server
  */
const port = config.PORT;
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
/**/