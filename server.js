const app = require('./config/express')();

app.get('/index.html',function(){
	
        res.render('home');
    
  
 });

app.listen(app.get('port'), function(){
  console.log('App listening at port ' + app.get('port'));
});
