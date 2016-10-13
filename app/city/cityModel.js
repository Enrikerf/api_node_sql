/**
 * Created by enrique on 06/07/2016.
 */

var sqlGetCities = 'SELECT * FROM cities ORDER BY id_city';



var CityModel = function () {
    var MyDb = require('../../config/initializers/MyDb');
    var CityView  = require('./cityView');

    this.cityView = new CityView();
    this.myDb = new MyDb();

};


CityModel.prototype.getCities = function(callback){
    this.myDb.query(sqlGetCities, function(error, results, fields) {
        callback(error, result, fields);
    });
}

CityModel.prototype.getCity = function(id_city, callback){
    var values = {id_city : id_city};
    var sql = 'SELECT * FROM cities WHERE ?' ;
    
    this.myDb.query( sql, values, function(error, results, fields) {
        callback(error, results, fields);
    });
}

module.exports = CityModel;