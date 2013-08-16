var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);
	db = require('./mysql_conn');

app.configure(function() {
    app.use(express.static(__dirname + '/www'));
});

io.sockets.on('connection', function(socket) {

});
console.log(db.query('SELECT * FROM stickers'));


server.listen(8888);
