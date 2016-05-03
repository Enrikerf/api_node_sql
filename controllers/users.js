/**
 * Created by enrique on 04/05/2016.
 */

var express = require('express');
var router = express.Router();
var UserModel = require('../models/users');


router.get('/user',function (req,res) {
    UserModel.getUsers();
})