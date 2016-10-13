/**
 * Created by enrique on 06/07/2016.
 */

module.exports = function cityController (app){//,stormpath

    
    var CityModel = require('./cityModel');
    var myCity = new CityModel();

    this.getAllCities = function (req, res){
        myCity.getCities( function obtainResponse(error, data){            
            myCity.cityView.getView(error, results, fields);            
        });
    };

    this.getCity = function (req, res){
        var id_city = req.params.id_city;
        myCity.getCity(id_city, function obtainResponse(error, results,fields){
            myCity.cityView.getView(res, error, results, fields);
        });
    };

    //Link routes and functions
    app.param('id_city',function ( req,res,next,id_city) {
        console.log('haciendo validaciones de ' + id_city);
        next();
    });
    app.get('/city', getAllCities);
    app.get('/city/:id_city', getCity);
}

