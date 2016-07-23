/**
 * Created by enrique on 06/07/2016.
 */

module.exports = function cityController (app){//,stormpath

    var cityView  = require('./cityView');
    var CityModel = require('./cityModel');
    var cityModel = new CityModel();

    this.getAllCities = function (req, res){
        cityModel.getCities( function obtainResponse(error, data){            
            cityView.getView(error, data,res);            
        });
    };

    this.getCity = function (req, res){
        var id_city = req.params.id_city;
        cityModel.getCity(id_city, function obtainResponse(error, data){
            cityView.getView(error, data,res);
        });
    };

    //Link routes and functions
    app.get('/city', getAllCities);
    app.get('/city/:id_city', getCity);
}

