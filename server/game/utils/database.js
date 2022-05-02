const mysql = require('./mysql.js');
const initDatabase = async () => {
    /**
     * ! If database tables don't exist then generate
     */
    let query = `SELECT * FROM users`;
    let res = await mysql(query);
    if(res.errno === 1146) {
        query = `CREATE TABLE users (
            id int NOT NULL AUTO_INCREMENT,
            name VARCHAR(255) NOT NULL,
            traits VARCHAR(255) NOT NULL,
            jwt VARCHAR(255) NOT NULL UNIQUE,
            transfer VARCHAR(255) NULL UNIQUE,
            PRIMARY KEY (id)
        )`;
        res = await mysql(query);
    }
}

module.exports = {
    initDatabase
}