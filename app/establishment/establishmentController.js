/**
 * Created by enrique on 24/07/2016.
 */

module.exports = function establishmentController(app,router) {




    //Link routes and functions
    app.param('id_Establishment',function ( req,res,next,id_Establishment) {
        console.log('haciendo validaciones de ' + id_Establishment);
        next();
    });
    
}
