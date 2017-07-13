var mysql = require("mysql");

var connection = mysql.createConnection({
  root: 3000,
  host: "localhost",
  user: "root",
  password: "Firebolt232",
  database: "burger_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("Error: " + err);
    return;
  }  
});

module.exports = connection;
