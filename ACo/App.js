const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");

app.listen(3000, () => {
  console.log("Server Start");
});

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
    `SELECT name FROM USER WHERE id = '${id}'`,
    async (err, rows) => {
      if (err) throw err;
      if (rows[0]) {
        data.push({
          result: true,
          name: rows[0].name
        });
      } else {
        data.push({
          result: false,
          name: ""
        });
      }
      await res.render("index.ejs", { data: JSON.stringify(data) });
    }
  );
});
