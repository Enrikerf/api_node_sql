/**
 * Created by enrique on 06/07/2016.
 */



var MySqlModel = function () {
    this.dbMySql = require('mysql');
    this.config = require('../config.json');
    this.connection = this.dbMySql.createConnection(
        {
            host: this.config.dbConfig.Host,
            user: this.config.dbConfig.User,
            password: this.config.dbConfig.Password,
            database: this.config.dbConfig.Schema
        }
    );
};

MySqlModel.prototype.getConfig = function () {
    return this.config.dbConfig.Host;
};

MySqlModel.prototype.query = function (sql, callback) {
    

    this.connection.query(sql, function (error, rows) {
        if(error)
        {
            callback(error, rows);
        }
        else
        {
            callback(null, rows);
        }
    });
    //this.connection.end();
};

// insert con su lock table y tal

// read

// put

// delete


module.exports = MySqlModel;