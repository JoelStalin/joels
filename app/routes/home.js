module.exports = function (app) {
    var findb = require('./db/findb')
    findb.dbfind('Personal', function render(datos) {
        app.route('/')
            .get(app.controllers.home.index('home', datos));
    });
}