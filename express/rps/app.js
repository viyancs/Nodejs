
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path');
  

var app = express();
var server = http.createServer(app);
var io   = require('socket.io').listen(server);
var routes = require('./config/routes')(app);
GLOBAL_SOCKET = null; //don't use var because global variable'

/**
 * socket io code behind
 * =============================================================================
 */
io.sockets.on('connection', function (socket) {
    GLOBAL_SOCKET = socket;
    console.log("client with id  " + socket.id +" is connected");
});


/**
 * express code behind
 * =============================================================================
 */
app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});


server.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});






