const app = require('./config/express')();

app.get('/index.html',function(){
	controller.index = function(req, res){
        res.render('home');
    }
  
 });

app.listen(app.get('port'), function(){
  console.log('App listening at port ' + app.get('port'));
});
