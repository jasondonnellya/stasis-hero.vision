const { setupLoginRoutes } = require('./login.js');

const setup = (router) => {
    setupLoginRoutes(router);
}

module.exports = setup