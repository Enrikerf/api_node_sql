/**
 * Created by enrique on 06/07/2016.
 */

var sqlGetCities = 'SELECT * FROM cities ORDER BY id_city';



var CityModel = function () {
    var MyDbModel = require('../../config/initializers/mySqlModel');
    this.myDb = new MyDbModel();
};


CityModel.prototype.getCities = function(callback){
    this.myDb.query(sqlGetCities, function(error, rows) {
            callback(error, rows);
    });
};

CityModel.prototype.getCity = function(id_city, callback){
    var sql = 'SELECT * FROM cities WHERE id_city =' + id_city;
    this.myDb.query(sql , function(error, rows) {
        callback(error, rows);
    });
};

module.exports = CityModel;