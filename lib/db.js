// const sqlite3 = require('sqlite3').verbose();

// let db = new sqlite3.Database('database.db', (err) => {
//     if (err) {
//         return console.error(err.message);
//     }
//     console.log('Connected to the in-memory SQlite database.');
// });

// function insertRow() {
//     var name = 'rahul';
//     var empid = 'rahul123';
//     var userid = 'hello2222';
//     var password = '8765';
    
//     db.run(
//       `INSERT INTO mytable (name, empid, userid,password) VALUES (?, ?, ?,?)`,
//       [name, empid, userid,password],
//       function (error) {
//         if (error) {
//           console.error(error.message);
//         }
//         console.log(`Inserted a row with the ID:`);
//       }
//     );
//   }
  
//   insertRow()