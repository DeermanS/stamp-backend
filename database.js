const pgp = require('pg-promise')(/* options */)
const cn = {
    host: 'localhost', // 'localhost' is the default;
    port: 5432, // 5432 is the default;
    database: 'stamp',
    user: 'postgres',
    password: 'admin',
};

const db = pgp(cn); // database instance;

module.exports = {db}