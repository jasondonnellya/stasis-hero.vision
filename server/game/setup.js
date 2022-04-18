const { init } = require('./database.js');
const { setupLoginRoutes } = require('./login.js');

const setup = (router) => {
    init();
    setupLoginRoutes(router);
}

module.exports = setup