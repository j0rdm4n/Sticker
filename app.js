var express = require('express'),
	mysql = require('mysql'),
	app = express(),
	conn_conf = {
    host     :'localhost',
    port     :3306,
    user     :'root',
    password :'',
    database: 'sticker'
	},
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);
	

app.configure(function() {
    app.use(express.static(__dirname + '/www'));
});

io.sockets.on('connection', function(socket) {

});

var connection = mysql.createConnection(conn_conf);
connection.connect(function(err) {
    if(err) console.log("Could not connect to DB");
    else {
        console.log("   Connected to database: "+conn_conf.database+' on '+conn_conf.host );
    }
});
connection.query( 'SELECT * FROM sticker.stickers ', function(err, rows) {
           

            for(var i=0; i<rows.length; i++){
                console.log(rows[i]);
            }

            return rows;

    });
server.listen(8888);

