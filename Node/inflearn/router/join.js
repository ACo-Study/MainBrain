const express = require("express");
const app = express();
const mysql = require("mysql");
const router = express.Router();
const path = require("path");

const connection = mysql.createConnection({
  host: "localhost",
  port: "3300",
  user: "root",
  password: "root",
  database: "jsman"
});
connection.connect();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/join.html"));
});

router.post("/", (req, res) => {
  const body = req.body;
  const email = body.email;
  const name = body.name;
  const passwd = body.password;

  const quert = connection.query(
    `insert into user (email, name, pwd) values ('${email}','${name}','${passwd}')`,
    (err, rows) => {
      if (err) throw err;
      else res.render("welcome.ejs", { name: name, id: rows.insertId });
    }
  );
});

module.exports = router;
