var mysql = require('mysql');

var connMySQL = function () {
    console.log("Conectado com Sucesso!");
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'josiel',
        password: '1234',
        database: 'fullstackmotos'
    });
}

module.exports = function () {
    return connMySQL;
}