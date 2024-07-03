var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    var values = [
        ['John', '123/321'],
        ['Ada', '456/654'],
        ['Mel', '789/987'],
        ['Red', '963/369'],
        ['Bill', '741/147']
    ];

    var sql = "INSERT INTO Customers (name, address) VALUES ?";
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
    con.end();
});
