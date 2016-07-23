/**
 * Created by enrique on 06/07/2016.
 */

module.exports = function cityController (app){//,stormpath

    var express = require('express');
    var cityView = require('./cityView');
    var CityModel = require('./cityModel');

    var cityModel = new CityModel();

    this.getAllCities = function (req, res){
        cityModel.getCities( function obtainResponse(error, data){
            if (typeof data !== 'undefined'){
                res.send(data);
            }
            else
            {
                res.status(404).send({
                    error: error,
                });
            }
        });
    };

    this.getCity = function (req, res){
        var id_city = req.params.id_city;
        cityModel.getCity(id_city, function obtainResponse(error, data){
            if (typeof data !== 'undefined'){
                res.send(data);
            }
            else
            {
                res.status(404).send({
                    error: error,
                });
            }
        });
    };

    //Link routes and functions
    app.get('/city', getAllCities);
    app.get('/city/:id_city', getCity);
}

