const express = require("express");
const app = express();
const mysql = require("mysql");
const router = express.Router();

const connection = mysql.createConnection({
  host: "localhost",
  port: "3300",
  user: "root",
  password: "root",
  database: "jsman"
});
connection.connect();

router.post("/form", (req, res) => {
  console.log(req.body.email);
  // res.send("<h1>welcome " + req.body.email + "</h1>")
  res.render("email.ejs", { email: req.body.email });
});

router.post("/ajax", (req, res) => {
  const email = req.body.email;
  const responseData = {};

  const query = connection.query(
    `select name from user where email = '${email}'`,
    (err, rows) => {
      if (err) throw err;
      if (rows[0]) {
        responseData.result = "ok";
        responseData.name = rows[0].name;
      } else {
        responseData.result = "none";
        responseData.name = "";
      }
      res.json(responseData);
    }
  );
});

module.exports = router;
