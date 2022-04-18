const mysql = (query, params) => {
    if(!query) throw Error('no query');

    const mysql = require('mysql')
    const connection = mysql.createConnection({
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME
    })

    connection.connect()

    return new Promise((resolve, reject) => {
        connection.query(query, params, (err, result) => {
            if(err) resolve(err);
            resolve(result);
        })
        connection.end()
    })
}

module.exports = mysql