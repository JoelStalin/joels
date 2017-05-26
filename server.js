const app = require('./config/express')();
var findb = require('./db/findb')

findb.dbfind('personal',function render(datos){
	console.log(datos);
});
app.get('/index.html',function(req,res){
   res.render('home');
 });

app.listen(app.get('port'), function(){
  console.log('App listening at port ' + app.get('port'));
});
