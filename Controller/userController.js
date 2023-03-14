const sqlite3 = require('sqlite3').verbose();
const express = require('express');
var fs = require('fs');
var file = 'database.db';
var exists = fs.existsSync(file);
// open database in memory

if (!exists) {
    console.log("Creating DB file.");
    fs.openSync(file, 'w');
}

let db = new sqlite3.Database(file, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});

function insertRow() {

  var name = 'nitin';
  var empid = 'nitin113';
  var userid = 'hello2222';
  var password = '8765';

  db.run(
    `INSERT INTO mytable (name, empid, userid,password) VALUES (?, ?, ?,?)`,
    [name, empid, userid,password],
    function (error) {
      if (error) {
        console.error(error.message);
      }
      console.log(`Inserted a row with the ID:`);
    }
  );
}

insertRow()
// const addUser = async (req,res) => {
//     await db.run("INSERT INTO mytable (name,empid,userid,password) VALUES ('nitin','nitin123','hello12','4321')");
//     console.log("entry ho gyi");
// }

// addUser();

// exports.addUser = addUser;