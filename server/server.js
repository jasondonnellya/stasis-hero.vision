/** This project uses Better Comments VSCode extension, please install in your VSCode extensions to view correct comment syntax.
  * * Setup, Enviromnment & Middleware
  */
require('dotenv').config();
const isDev = process.env.NODE_ENV !== 'production';
/**
 * !do not place any sensitive data in the /config directory
 */
const config = require('./config/' + (process.env.NODE_ENV) + '.json');
/**/
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

const router = express.Router();
/**/
 
 
/**
  * ? Game
  */
 
const setup = require('./game/setup.js');
setup(router);
 
/**/
 
 
/**
  * ! Testing 
  */
if(isDev) {
  const debug = require('./debug.js');
  debug(router);
}
/**/
 
 
/**
  * ! 404 Catch all redirect to Homepage
  */
router.get('*', function(req, res){
  res.status(302).redirect('/');
});
/**/
 
 
/**
  * * Start Server
  */
app.use(router);
const port = config.PORT;
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
/**/