const init = (router) => {
    /**
     * ? standard re-usable /debug route for handling any logic to test especially SQL logic
     */
    router.get('/debug', (req, res) => {
        const state = require('./state/state.js');
        const user = {

        }
        state.userJoined(user);
        const html = `
            ${state.getUsers()}
        `;
        res.send(html);
    })
    /**
     * * These routes are for testing if the express server is working.
     */
    router.get('/test', (req, res) => {
        res.send(`
          express is running
          <br><br>
          NODE_ENV: ${process.env.NODE_ENV}
       `)
    });
    router.get('/api-test', (req, res) => {
        res.json({
          api: 'Reminder!!: Make sure to destructure data correctly as it helps keep code clean :)'
        })
    });
    /**/
}

module.exports = init