var sql = require("mssql");
var connect = function()
{
    var conn = new sql.ConnectionPool({
        user: 'nuovoutente',
        password: 'password.1995',
        server: 'localhost',
        database: 'Fornitori'
    });
 
    return conn;
};

module.exports = connect;