/**
 * Created by enrique on 07/07/2016.
 */


//llamamos al paquete mysql que hemos instalado
var mysql = require('mysql');
var myDb = require('../../config/initializers/MyDb');


//creamos un objeto para ir almacenando lo que necesitemos
var userModel = {};
/*
//obtenemos todos los usuarios
userModel.getUsers = function(callback)
{
    if (myDb)
    {
        myDb.query('SELECT * FROM users ORDER BY id_user', function(error, rows) {
            if(error)
            {
                throw error;
            }
            else
            {
                callback(null, rows);
            }
        });
    }
}

//obtenemos un usuario por su id
userModel.getUser = function(id,callback)
{
    if (myDb)
    {
        var sql = 'SELECT * FROM users WHERE id_user = ' + myDb.escape(id);
        myDb.query(sql, function(error, row)
        {
            if(error)
            {
                throw error;
            }
            else
            {
                callback(null, row);
            }
        });
    }
}

//a�adir un nuevo usuario
userModel.insertUser = function(userData,callback)
{
    if (myDb)
    {
        myDb.query('INSERT INTO users SET ?', userData, function(error, result)
        {
            if(error)
            {
                throw error;
            }
            else
            {
                //devolvemos la �ltima id insertada
                callback(null,{"insertId" : result.insertId});
            }
        });
    }
}

//actualizar un usuario
userModel.updateUser = function(userData, callback)
{
    //console.log(userData); return;
    if(myDb)
    {
        var sql = 'UPDATE users SET username = ' + myDb.escape(userData.username) + ',' +
            'email = ' + myDb.escape(userData.email) +
            'WHERE id = ' + userData.id;

        myDb.query(sql, function(error, result)
        {
            if(error)
            {
                throw error;
            }
            else
            {
                callback(null,{"msg":"success"});
            }
        });
    }
}

//eliminar un usuario pasando la id a eliminar
userModel.deleteUser = function(id, callback)
{
    if(myDb)
    {
        var sqlExists = 'SELECT * FROM users WHERE id = ' + myDb.escape(id);
        myDb.query(sqlExists, function(err, row)
        {
            //si existe la id del usuario a eliminar
            if(row)
            {
                var sql = 'DELETE FROM users WHERE id = ' + myDb.escape(id);
                myDb.query(sql, function(error, result)
                {
                    if(error)
                    {
                        throw error;
                    }
                    else
                    {
                        callback(null,{"msg":"deleted"});
                    }
                });
            }
            else
            {
                callback(null,{"msg":"notExist"});
            }
        });
    }
}
*/
//exportamos el objeto para tenerlo disponible en la zona de rutas
module.exports = userModel;