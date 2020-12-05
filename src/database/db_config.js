const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost:3306',
        user: 'root',
        password: '1234',
        database: 'biblioteca'
    }
});

module.exports = knex;

