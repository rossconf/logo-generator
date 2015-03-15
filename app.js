var express = require('express'),
    exphbs  = require('express-handlebars'),
    app = express();

app.set('port', (process.env.PORT || 3000));

app.engine('hbs', exphbs());
app.set('view engine', 'hbs');
app.use('/javascripts', express.static(__dirname + '/javascripts'));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index');
});

var server = app.listen(app.get('port'), function () {
  var host = server.address().address;

  console.log('RossCon Logo app listening at http://%s:%s', host, app.get('port'));

});
