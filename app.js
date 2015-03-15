var express = require('express'),
    exphbs  = require('express-handlebars'),
    app = express();

app.engine('hbs', exphbs());
app.set('view engine', 'hbs');
app.use('/javascripts', express.static(__dirname + '/javascripts'));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index');
});

var server = app.listen(3000, function () {
  var host = server.address().address,
      port = server.address().port;

  console.log('RossCon Logo app listening at http://%s:%s', host, port);

});
