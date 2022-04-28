const mysql = (query, params) => {
    if(!query) throw Error('no query');

    const mysql = require('mysql')
    const connection = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
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