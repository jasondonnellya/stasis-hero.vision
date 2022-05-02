const jwt = require('jsonwebtoken');
const mysql = require('./mysql.js');
const dayjs = require('dayjs');

const generate = () => {
    let secret = process.env.JWT_SECRET_KEY;
    let data = {
        time: Date(),
        userId: Math.random() * 100000000000000
    }
    let token = jwt.sign(data, secret);
    return token;
}

const setToken = (jwt, res) => {
    res.cookie('jwt', jwt, {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        expires: dayjs().add(30, 'days').toDate(), // change to a lot more or else people lose accounts
        signed: process.env.COOKIE_SECRET ? true : false
    });
    return jwt;
}

const getToken = (req) => {
    const { jwt } = req.signedCookies;
    return jwt;
}

const clearToken = (res) => {
    res.clearCookie('jwt');
}

const removeSensitiveData = (data) => {
    if(!data) return;
    delete data.jwt; //remove these sensitive values
    delete data.transfer;
    return data
}

const validateToken = async (req) => {
    const jwt = getToken(req);
    let result = false;
    if(jwt) {
        let query = `SELECT * FROM users WHERE jwt LIKE '${jwt}'`;
        let d_res = await mysql(query);
        if(d_res.length > 0) {
            result = d_res[0];
            result = removeSensitiveData(result);
        }
    }
    return result;
}

module.exports = {
    generate,
    setToken,
    getToken,
    clearToken,
    removeSensitiveData,
    validateToken
};
