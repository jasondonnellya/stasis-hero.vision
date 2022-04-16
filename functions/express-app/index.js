/**
  * * Setup
  * ? Ref: https://github.com/netlify-labs/netlify-functions-express/blob/master/functions/app/index.js
  * ? Proxy: https://answers.netlify.com/t/how-to-configure-react-dev-and-lambda-serve-to-run-same-time-on-same-port/14133
  */

import express from 'express'
import cors from 'cors'
// import morgan from 'morgan'
import compression from 'compression'
export default function expressApp(functionName) {
  const app = express()
  const router = express.Router()

  router.use(compression())
  const routerBasePath = process.env.NODE_ENV === 'dev' ? `/${functionName}` : `/.netlify/functions/${functionName}/`

  router.get('/', (req, res) => {
    res.json({ body: `index` })
  });

  /**
    * ? Game
    */


  // import and  code all game logic here


  /**/

  /**
    * ! Testing 
    */
  router.get('/test', (req, res) => {
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
  // app.get('*', function(req, res){
  //   res.status(302).redirect('/');
  // });
  /**/


  /**
    * @return app
    */
  // Attach logger
  //app.use(morgan(customLogger))
  // Setup routes
  app.use(cors({ origin: 'http://localhost:3000' }))
  app.use(routerBasePath, router)
  return app
  /**/
}