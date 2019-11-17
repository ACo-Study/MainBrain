const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Server Start");
});

const connection = mysql.createConnection({
  host: "localhost",
  port: "3300",
  user: "root",
  password: "root",
  database: "HighLife"
});
connection.connect();

app.post("/login", (req, res) => {
  const id = req.body.id;
  let data = [];

  let query = connection.query(
    `SELECT name FROM user WHERE id = '${id}'`,
    (err, rows) => {
      if (err) throw err;
      if (rows[0]) {
        data.push({
          reuslt: true,
          name: rows[0].name
        });
      } else {
        data.push({
          result: false,
          name: ""
        });
      }
      res.render("index.ejs", { data: JSON.stringify(data) });
    }
  );
});
