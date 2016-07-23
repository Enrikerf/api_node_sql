/**
 * Created by enrique on 06/07/2016.
 */


var cityView = {};
//TODO: habrá que hacer un swhitch supongo con los errores para renderizar 404 o lo que corresponda
cityView.getView = function (error,data,res) {
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

cityView.throwError = function (data,res) {
    res.json(404,{"msg":"notExist"});
};

//exportamos el objeto para tenerlo disponible en la zona de rutas
module.exports = cityView;
