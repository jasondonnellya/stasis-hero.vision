const { initDatabase } = require('./utils/database.js');
const { setupLoginRoutes } = require('./utils/login.js');

const setup = (router) => {
    initDatabase();
    setupLoginRoutes(router);
}

module.exports = setup