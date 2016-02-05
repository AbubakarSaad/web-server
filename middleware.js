/**
 * Created by abubakarsaad on 2016-02-05.
 */

var middleware = {
    requireAuthentication: function (req, res, next) {
        console.log('private route hit');
        next();
    },
    logger: function (req, res, next) {
        // new Date()
        var date = new Date();
        console.log(req.method + ' ' + req.originalUrl + ' ' + date.toString());
        next();
    }
}


module.exports = middleware;