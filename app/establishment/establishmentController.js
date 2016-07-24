/**
 * Created by enrique on 24/07/2016.
 */

module.exports = function establishmentController(app,router) {

    var establishmentView  = require('./establishmentView');
    var EstablishmentModel = require('./EstablishmentModel');
    var myEstablishment = new EstablishmentModel();

    this.getAllCities = function (req, res){
        myEstablishment.getCities( function obtainResponse(error, data){
            establishmentView.getView(error, data,res);
        });
    };

    this.getEstablishment = function (req, res){
        var id_Establishment = req.params.id_Establishment;
        myEstablishment.getEstablishment(id_Establishment, function obtainResponse(error, data){
            establishmentView.getView(error, data,res);
        });
    };

    //Link routes and functions
    app.param('id_Establishment',function ( req,res,next,id_Establishment) {
        console.log('haciendo validaciones de ' + id_Establishment);
        next();
    });
    app.get('/establishment', getAllCities);
    app.get('/establishment/:id_establishment', getEstablishment);
    
}
 /*
// TODO: probar de la forma pasandole la app y poner app.Router();
var express = require('express');
var establishmentController = express.Router();


establishmentController.param('id_establishment',function ( req,res,next,id_establishment) {

    console.log('haciendo validaciones de ' + id_establishment);
    next();
});


establishmentController.get('/', function holae(req,res) {
    res.send('hola por /');
});

establishmentController.get('/establishment', function hola2(req,res) {
    res.send('hola por establishment');
});

establishmentController.get('/:id_establishment', function (req,res) {
    res.send('hola id establishment');
});

module.exports = establishmentController;

*/