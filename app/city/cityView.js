/**
 * Created by enrique on 06/07/2016.
 */


var cityView = {};

cityView.getView = function (data,res) {
    res.send(data);
};

cityView.throwError = function (data,res) {
    res.json(404,{"msg":"notExist"});
};

//exportamos el objeto para tenerlo disponible en la zona de rutas
module.exports = cityView;
