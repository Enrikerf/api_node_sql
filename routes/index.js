var express = require('express');
var router = express.Router();
var UserModel = require('../models/users');


/* Mostramos el formualario para crear usuarios nuevos */
router.get('/', function(req, res)
{
  res.render('index', { title: 'Servicio rest con nodejs, express 4 y mysql'});
});

module.exports = router;