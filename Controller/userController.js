const sqlite3 = require('sqlite3').verbose();
const express = require('express');


let db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err && err.code == "SQLITE_CANTOPEN") {
        return;
    } else if (err) {
        console.log("Getting error " + err);
        exit(1);
    }
});


const addUser = (req, res) => {
    var name = req.body.username;
    var empid = req.body.empid;
    var userid = req.body.userid;
    var password = req.body.password;
    db.run(`INSERT INTO mytable(name,empid,userid,password) VALUES(?,?,?,?)`, [name, empid, userid, password], function (err) {
        if (err) {
            return console.log(err.message);
        }
        // get the last insert id
        console.log(`A row has been inserted `);
    });
    res.redirect('/login');
}


const loginUser = (req, res) => {
    var name = req.body.username;
    var password = req.body.password;

    let errors = [];

    if (!name || !password) {
        errors.push({ msg: 'please fill the all fields' });
    }

    if (errors.length > 0) {
        res.render('Login', {
            errors, name, password
        })
    }
    else {
        db.each(`SELECT * FROM mytable WHERE name = ? `, name, (err, row) => {

            if (row.password === password) {
                console.log("user Logged in")
                res.redirect('/');
            }
            else {
                errors.push({ msg: 'Invalid Password' })
                res.render('Login', {
                    errors, name
                })
            }
        })
    }
}


const deleteUser = async (req,res,next) => {
    const id = req.params.id;
}

const getAlluser = async (req,res,next) => {
    db.all("SELECT * FROM mytable", function(err, rows) {
        res.render('Alluser', {data:rows})
       });
}


exports.addUser = addUser;
exports.loginUser = loginUser;
exports.deleteUser = deleteUser;
exports.getAlluser = getAlluser;



// db.each(`SELECT * FROM mytable WHERE name = ? `, name, (err, row) => {

//     if(row.name != name ){
//         console.log("user nahi h");
//         errors.push({ msg: 'User not registered'})
//         res.render('Login', {
//             errors
//         })
//     }
//     else{
//         if (row.password === password) {
//             console.log("user Logged in")
//             res.redirect('/');
//         }
//         else {
//             errors.push({ msg: 'Invalid Password'})
//             res.render('Login', {
//                 errors,name
//             })
//         }
//     }
// })