/**
 * Created by Enrikerf on 15/02/2016.
 */

function dbModel(){
    this.dbConfig = require('../config/config.json').dbConfig;
    this.dbSql = require('mysql');
    this.connection = this.dbSql.createConnection(
        {
            host: this.dbConfig.Host,
            user: this.dbConfig.User,
            password: this.dbConfig.Password,
            database: this.dbConfig.Schema
        }
    );
}

dbModel.prototype.getConfig = function(){
    return this.dbConfig;
}

dbModel.prototype.dbQuery= function(sql,callback){
    if(this.connection)
    {
        this.connection.query(sql, function(error, row)
        {
            if(error)
            {
                throw error;
            }
            else
            {
                callback(null, row);
            }
        })
    }
}




module.exports = dbModel;