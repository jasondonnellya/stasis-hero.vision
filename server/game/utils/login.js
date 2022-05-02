/** @generate ()  */
const { generate, setToken, getToken, clearToken, validateToken } = require('./token.js');
/** @mysql ({ query, callback })  */
const mysql = require('./mysql.js');

const login = (router) => {
    router.post('/login', async (req, res) => {
        const user = await validateToken(req)
        res.json({ user });
    })
}

const updateUser = (router) => {
    router.post('/updateUser', async (req, res) => {
        let jwt = getToken(req);
        let validated = await validateToken(req);
        const {
            data: {
                name,
                traits
            },
        } = req.body // destructure req.body
        let user  = {};
        let query = null;
        if(!name || !traits) {
            res.statusMessage = 'updateUser requires name and traits body data';
            res.status(500).end();
            return;
        }
        if(jwt && validated) {
            query = `UPDATE users SET name = '${name}' WHERE jwt LIKE '${jwt}'`;
            let data = await mysql(query);
            if(!data) {
                res.statusMessage = 'updateUser SQL UPDATE failed';
                res.status(500).end();
                return;
            }
            user = { name, traits }
            console.log('updated user: ' + name);
        } else {
            jwt = generate();
            query = `INSERT INTO users (name, traits, jwt) VALUES ('${name}', '${traits}', '${jwt}')`;
            let data = await mysql(query);
            if(!data) {
                res.statusMessage = 'updateUser SQL INSERT failed';
                res.status(500).end();
                return;
            }
            user = { name, traits }
            console.log('created user: ' + name);
        }
        setToken(jwt, res);
        user.jwt = jwt;
        res.status(200).json(user);
    })
}

const logout = (router) => {
    router.post('/logout', (req, res) => {
        clearToken(res);
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
    setupLoginRoutes,
};