/**
 * Created by enrique on 06/07/2016.
 */



//TODO: habrá que hacer un swhitch supongo con los errores para renderizar 404 o lo que corresponda
var CityView = function () {
    
}

CityView.prototype.getView = function (res, error,results,fields) {

    if (!error ){
        res.send(results);
        console.log(results);
        console.log(error);
        console.log(fields);// los datos de la cone
    }
    else
    {
        res.status(404).send({
            error: error,
        });
    }
};


//exportamos el objeto para tenerlo disponible en la zona de rutas
module.exports = CityView;
