const login = (router) => {
    router.post('/login', (req, res) => {
        /**
         * TODO: If there is a user token connected to an account on this device then refresh it or if the token isn't connected, remove it
         * TODO: otherwise create a user account with the provided name,
         * TODO: if there is no name then return error no name
        */
        res.send('login');
    })
}

const updateUser = (router) => {
    router.post('/updateUser', (req, res) => {
        const {
            data: {
                name,
                traits
            },
        } = req.body // destructure req.body
        res.send('update user');
    })
}

const logout = (router) => {
    router.post('/logout', (req, res) => {
        /**
         * TODO: Remove JWT token
         * ! Account will be lost if there's not transfer token connected, they will have to contact me to retrieve their lost account
         */
        res.send('logout');
    })
}

const createTransferToken = (router) => {
    router.post('/createTransferToken', (req, res) => {
        /**
         * TODO: Create another JWT token that connects to an account as a transfer code
         */
        res.send('create transfer token');
    })
}

const transferAccount = (router) => {
    router.post('/transfer', (req, res) => {
        /**
         * TODO: Check token against transfer token, refresh new JWT Token and set it as HTTP cookie for this device
         */
        res.send('transfer');
    })
}

/** @generate ()  */
const { generate } = require('./token.js');
/** @mysql ({ query, callback })  */
const mysql = require('./mysql.js');

const validateUserToken = (req) => {
    /**
     * TODO: Check account against JWT Token in database
     */
    const bool = false;
    return bool;
}

const validateTransferToken = (req) => {
    /**
     * TODO: Check account against JWT Token in database
     */
    const bool = false;
    return bool;
}

const setupLoginRoutes = (router) => {
    login(router);
    logout(router);
    updateUser(router);
    createTransferToken(router);
    transferAccount(router);
}

module.exports = {
    login,
    logout,
    updateUser,
    createTransferToken,
    transferAccount,
    validateUserToken,
    validateTransferToken,
    setupLoginRoutes
};