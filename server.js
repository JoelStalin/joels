﻿const app = require('./config/express')();
var findb = require('./db/findb')
app.set('view engine', 'ejs');
app.use.controller
findb.dbfind('Personal',function render(datos){
app.get('/', function (req, res) {
        console.log(datos[0]);
        //res.render('home', datos[0]);
        res.render('home', datos[0]);
   });
  //console.log(datos);
});

app.listen(app.get('port'), function(){
  console.log('App listening at port ' + app.get('port'));
});
