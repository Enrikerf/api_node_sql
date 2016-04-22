module.exports = function(app){

    var express = require('express');
    var router = express.Router();
    var UserModel = require('../models/users');

    /* Obtenemos y mostramos todos los usuarios */
    getAllClients = function(req, res)
    {
        UserModel.getUsers(function(error, data)
        {
            //si existe el usuario mostramos el formulario
            if (typeof data !== 'undefined')
            {
                res.send(data);
            }
            //en otro caso mostramos un error
            else
            {
                res.json(404,{"msg":"notExist"});
            }
        });
    };

    /* Creamos un nuevo usuario */
    createClient = function(req,res)
    {
        //creamos un objeto con los datos a insertar del usuario
        var userData = {
            id_user: null,
            token : "asdf",
            id_city: "2",
            black_list: "asdf",
            UUID:"asdf",
            os : "asdf"
        };
        UserModel.insertUser(userData,function(error, data)
        {
            //si el usuario se ha insertado correctamente mostramos su info
            if(data && data.insertId)
            {
                res.redirect("/user/" + data.insertId);
            }
            else
            {
                res.json(500,{"msg":"Error"});
            }
        });
    };

    /* Obtenemos un usuario por su id y lo mostramos en un formulario para editar */
    getClientById = function(req, res)
    {
        var id = req.params.id;
        //solo actualizamos si la id es un número
        if(!isNaN(id))
        {
            UserModel.getUser(id,function(error, data)
            {
                //si existe el usuario mostramos el formulario
                if (typeof data !== 'undefined' && data.length > 0)
                {
                    res.send(data);
                }
                //en otro caso mostramos un error
                else
                {
                    res.json(404,{"msg":"notExist"});
                }
            });
        }
        //si la id no es numerica mostramos un error de servidor
        else
        {
            res.json(500,{"msg":"The id must be numeric"});
        }
    };

    /* Actualizamos un usuario existente */
    putClient = function(req, res)
    {
        //almacenamos los datos del formulario en un objeto
        var userData = {id:req.param('id'),username:req.param('username'),email:req.param('email')};
        UserModel.updateUser(userData,function(error, data)
        {
            //si el usuario se ha actualizado correctamente mostramos un mensaje
            if(data && data.msg)
            {
                res.redirect("/user/" + req.param('id'));
            }
            else
            {
                res.json(500,{"msg":"Error"});
            }
        });
    };

    /* ELiminamos un usuario */
    deleteClient = function(req, res)
    {
        //id del usuario a eliminar
        var id = req.param('id');
        UserModel.deleteUser(id,function(error, data)
        {
            if(data && data.msg === "deleted" || data.msg === "notExist")
            {
                res.redirect("/users/");
            }
            else
            {
                res.json(500,{"msg":"Error"});
            }
        });
    };

    //Link routes and functions
    app.get('/user', getAllClients);
    app.get('/user/:id', getClientById);
    app.post('/user', createClient);
    app.put('/user/:id', putClient);
    app.delete('/user/:id', deleteClient);

}
