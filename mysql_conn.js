//Require mysql connector that you installed with npm
var mysql = require('mysql');

var conn_conf = {
    host     :'localhost',
    port     :3306,
    user     :'root',
    password :'',
    database: 'sticker'
}

var connection = mysql.createConnection(conn_conf);

connection.connect(function(err) {
    if(err) console.log("Could not connect to DB");
    else{
        console.log("   Connected to database: "+conn_conf.database+' on '+conn_conf.host );
    }
});


this.query = function(querydata) {
	connection.query( querydata, function(err, rows) {
			 for(var i=0; i<rows.length; i++){
                console.log(rows[i]);
            }

            return rows;

	});
}
