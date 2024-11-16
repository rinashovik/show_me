const http = require("http");
const fs = require("fs");
const url = require("url");
const mysql = require('mysql');



const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'e-shopping',
  password : 'eshopping123',
  database : 'e-shopping-database'
});
 
connection.connect(function(err) {
  // connection.connect((err) => {

    if (err) throw err;

    // console.log("Database connection")

    //Getting the connection ID

    console.log('connected as id ' + connection.threadId);

//create the new customer
    const sql = "INSERT INTO customer (id,address,city,email,f_name,l_name,phone_number,zip_code) VALUES (586,'211 Ocean Pkway', 'new york','ro@yahoo.com','Badhon','Arafat','5988-658-9875','85964')";

    connection.query(sql, function(results,fields){
    if(err) throw err;
    console.log("Results: " + JSON.stringify(results));
  });
      
  // Retrive the data from table
    connection.query("SELECT * FROM customer", function (err, result, fields) {

      if (err) throw err;
      console.log("Result: " + JSON.stringify(result));
    });



    // update the customer
  const sql1 = "UPDATE customer SET zip_code = '12345' WHERE city = 'new york'";

    connection.query(sql1, function (error, results, fields) {
      if (error) throw error;
      console.log('changed ' + results.changedRows + ' rows');
    })

      // delete customer
    connection.query('DELETE FROM customer WHERE id = 5', function (error, results, fields) {
      if (error) throw error;


      //Getting the number of changed rows

      console.log('changed ' + results.changedRows + ' rows');

      //Getting the number of affected rows

      console.log('deleted ' + results.affectedRows + ' rows');
    })


    // Create the table  goog code
    // const crt = "CREATE TABLE departments (name VARCHAR(255), role VARCHAR(255))";
    // connection.query(crt, function (err, result) {
    //   if (err) throw err;
    //   console.log("Table created");
    // });
  
connection.end();

  });



    // create the server
http.createServer(function (req, res) {

    // const q = url.parse(req.url, true);
    // const filename = "." + q.pathname;

    // include the file to read
    fs.readFile("./index.html",function(err, data){


   res.writeHead(200, {'Content-Type': 'text/html'});
   //create quary path
        // res.write(req.url);
      res.write(data);
          // res.write("Creating my own server with Node JS");
      res.end("Creating my own server with Node JS");
    })
 
    // res.end('Hello World! Welcome to My Own Server' + date);

    // listenting the port
  }).listen(3500);



  




// console.log("Creating my own server")

// var con = mysql.createConnection({
//   host: "localhost:3306",
//   user: "mydatabase",
//   password: "mydatabase123"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE mydb", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });
