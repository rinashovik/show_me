

const mysql = require("mysql");

console.log("Creating my own server")

var con = mysql.createConnection({
  host: "localhost",
  user: "mydatabase",
  password: "mydatabase123"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});