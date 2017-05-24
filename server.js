const app = require('./config/express')();
 app.get('/', function (req, res) {
  app.send('home',{index});
});

app.listen(app.get('port'), function(){
  console.log('App listening at port ' + app.get('port'));
});
