/*
*   QBBO API
*
*   Author:             Enrique Arrabal
*   Date of Creation:   20/06/2016
*   version:            0.0.1
*       versions:           0.0.0
*
*/

var express         = require('express');
var path            = require('path');
var logger          = require('morgan');
var cookieParser    = require('cookie-parser');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
//var stormpath     = require('express-stormpath');
var config          = require('./config/config.json');
var helmet          = require('helmet');// por seguridad: http://expressjs.com/en/advanced/best-practice-security.html
var app             = express();
var router          = express.Router();

app.disable('x-powered.by'); // lo minimo de seguridad de helmet
app.use(helmet());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//configuramos methodOverride
app.use(methodOverride(function(req, res){
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
    }
}));
/*
app.use(stormpath.init(app,{
    client: {
        apiKey:{
            id: config.stormpath.client.apiKey.id,
            secret: config.stormpath.client.apiKey.secret
        }
    },
    application:{
        href : config.stormpath.application.href
    }
}));
*/

//----------------------------------------------------------------------------------------------------------------------



var citiesController        = require('./app/city/cityController')(app);//,stormpath)
var usersController         = require('./app/user/userController')(app);//,stormpath
var establishmentController = require('./app/establishment/establishmentController')(app);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// ERROR HANDLER

// development error handler will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500).send({
            message: err.message,
            error: err
        });
    });
}

// production error handler no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500)
        .send({
            message: err.message,
            error: {}
        });
});

/*
app.on('stormpath.ready', function () {
    console.log('Stormpath Ready!');
});
*/
module.exports = app;