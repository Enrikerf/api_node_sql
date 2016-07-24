/**
 * Created by enrique on 06/07/2016.
 */



//TODO: habrá que hacer un swhitch supongo con los errores para renderizar 404 o lo que corresponda
var CityView = function () {
    
}

CityView.prototype.getView = function (error,data,res) {
    if (typeof data !== 'undefined'){
        res.send(data);
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
