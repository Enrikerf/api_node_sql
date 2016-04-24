var express         = require('express');
var path            = require('path');
var logger          = require('morgan');
var cookieParser    = require('cookie-parser');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var stormpath       = require('express-stormpath');
var config          = require('./config/config.json');
var app             = express();

//configuración para ejs
app.set('views', path.join(__dirname, 'views'));
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

//----------------------------------------------------------------------------------------------------------------------

routes = require('./routes/users')(app);

app.get('/test',stormpath.apiAuthenticationRequired,  function(req,res){
    res.json({test:"exito"});
});

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



module.exports = app;