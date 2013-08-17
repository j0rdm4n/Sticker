var express = require('express'),
	mysql = require('mysql'),
	app = express(),
	connection = mysql.createConnection({
    host     :'localhost',
    port     :3306,
    user     :'root',
    password :'',
    database: 'sticker'
	}),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);
	app.configure(function() {
	  app.use(express.bodyParser());
	  app.use(express.methodOverride());
	  app.use(app.router);
	  app.use(express.static(__dirname + '/www'));
	  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
	
	});
	app.get('/getallusers', function (req, res) {
	   connection.query('SELECT * FROM user_data;', function (error, rows, fields) { 
	         res.writeHead(200, {'Content-Type': 'text/plain'});
			 str='';
			 for(i=0;i<rows.length;i++)
				str = str + rows[i].a_name +'\n';
			 res.end( str);
	      }); 
	});
	io.sockets.on('connection', function(socket) {
	
	});
server.listen(8888);

