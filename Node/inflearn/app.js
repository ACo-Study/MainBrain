const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql')

var connection = mysql.createConnection({
    host : 'localhost',
    port : '3300',
    user : 'root',
    password : 'root',
    database : 'jsman'
})

connection.connect()

app.listen(3000, () => {
    console.log("start!! express server on port 3000");
});

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')
app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/main.html");
});

app.get('/main', (req, res) => {
    res.sendFile(__dirname + "/public/main.html");
});

app.post('/email_post', (req, res) => {
    console.log(req.body.email)
    // res.send("<h1>welcome " + req.body.email + "</h1>")
    res.render('email.ejs', {'email' : req.body.email})
})

app.post('/ajax_send_email', (req, res) => {
    var email = req.body.email;
    var responseData = {};

    var query = connection.query(`select name from user where email = '${email}'`, (err, rows) => {
        if(err) throw err;
        if(rows[0]) {
            responseData.result = "ok";
            responseData.name = rows[0].name
        } else {
            responseData.result = "none";
            responseData.name = rows[0].name
        }
        res.json(responseData)
    })
})