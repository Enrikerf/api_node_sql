/**
 * Created by enrique on 06/07/2016.
 */



var MyDb = function () {
    this.dbMySql = require('mysql');
    this.config = require('../config.json');
    this.connection = this.dbMySql.createConnection(
        {
            host: this.config.dbConfig.Host,
            user: this.config.dbConfig.User,
            password: this.config.dbConfig.Password,
            database: this.config.dbConfig.Schema
            /*

             https://github.com/mysqljs/mysql

            ,timezone:PONER
            ,connectTimeout:10000ms
             dateStrings: Force date types (TIMESTAMP, DATETIME, DATE) to be returned as strings rather then inflated into JavaScript Date objects. (Default: false)
             debug: Prints protocol details to stdout. (Default: false)
             trace: Generates stack traces on Error to include call site of library entrance ("long stack traces"). Slight performance penalty for most calls. (Default: true)
             multipleStatements: Allow multiple mysql statements per query. Be careful with this, it could increase the scope of SQL injection attacks. (Default: false)
             flags: List of connection flags to use other than the default ones. It is also possible to blacklist default ones. For more information, check Connection Flags.
             ssl: object with ssl parameters or a string containing name of ssl profile. See SSL options.

             var connection = mysql.createConnection('mysql://user:pass@host/db?debug=true&charset=BIG5_CHINESE_CI&timezone=-0700');
             ssl  : {
             ca : fs.readFileSync(__dirname + '/mysql-ca.crt')
             }

           */

        }
    );


};

MyDb.prototype.getConfig = function () {
    return this.config.dbConfig.Host;
};

MyDb.prototype.query = function (sql, values, callback) { // callback con error,results,fields

    this.connection.connect(function(error) {
        if (error) {
            console.error('error connecting: ' + error.stack);
            callback(error,results,fields);
        }
        //console.log('connected as id ' + this.connection.threadId); No se lee el conectionID
    });

    var query = this.connection.query(sql,values, function (error,results,fields) {
        if(error)
        {
            callback(error,results,fields);
        }
        else
        {
            callback(null,results,fields);

        }
    });
    this.connection.end();
};

// insert con su lock table y tal

// read

// put

// delete


module.exports = MyDb;