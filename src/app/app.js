
const express = require('express');
const cors = require('cors')
const bp = require('body-parser')
const app = express();
const mysql = require('mysql')

app.use(bp.urlencoded({ extended: true }))
app.use(bp.json())
app.use(cors());
app.all('*', function (req, res, next) {

    res.header("Access-Control-Allow-Origin", '*');

    res.header("Access-Control-Allow-Headers", "Cache-Control,Pragma, Origin, Authorization, Content-Type, X-Requested-With");

    res.header("Access-Control-Allow-Methods", "*");

    return next();
});
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'project',
    password: 'password',
    multipleStatements: true
});

// connect to database
db.connect((err) => {
    if (err) {
      throw new Error('database failed to connect');

        // throw err;
    }
    console.log('Connected to database');

});

app.post('/register',  (req, res, next) => {
    console.log('register', req.body);
    var n = req.body.userName;
    var e = req.body.emailID;
    var p = req.body.phoneNo;
    var c = req.body.city;
    var d = req.body.designation;
    var users={
        "userName":req.body.userName,
        "emailID":req.body.emailID,
        "phoneNo":req.body.phoneNo,
        "city":req.body.city,
        "designation": req.body.designation
     }
     db.query('INSERT INTO users SET ?',users,  (error, results, fields) => {
        if (error) {
          console.log("error ocurred",error);
          res.send({
            "code":400,
            "failed":"error ocurred"
          })
        }else{
          console.log('The solution is: ', results);
          res.send({
            "code":200,
            "success":"user registered sucessfully"
              });
        }
        });
})
app.get('/getUsers', (req, res, next) => {
    db.query("SELECT * FROM users", (error, results, fields) => {
        if (error) {
          console.log("error ocurred",error);
          res.send({
            "code":400,
            "failed":"error ocurred"
          })
        }else{
          console.log('The solution is: ', results);
          res.send({
              data: results,
            "code":200,
            "success":"user data fetched sucessfully"
              });
        }
        });  
})
app.listen(4500, () => console.log(' Server started and listening on port: 4500'));
