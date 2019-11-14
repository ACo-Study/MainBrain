const express = require("express");
const app = express();
const mysql = require("mysql");
const router = express.Router();
const path = require("path");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const connection = mysql.createConnection({
  host: "localhost",
  port: "3300",
  user: "root",
  password: "root",
  database: "jsman"
});
connection.connect();

router.get("/", (req, res) => {
  let msg;
  let errMsg = req.flash("error");
  if (errMsg) msg = errMsg;
  res.render("join.ejs", { message: msg });
});

passport.serializeUser((user, done) => {
  console.log(`passport session save : ${user.id}`);
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log(`passport session get id : ${id}`);
  done(null, id);
});

passport.use(
  "local-join",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true
    },
    (req, email, password, done) => {
      let query = connection.query(
        `select * from user where email = '${email}'`,
        (err, rows) => {
          if (err) return done(err);

          if (rows.length) {
            console.log("existed user");
            return done(null, false, { message: "your email is already used" });
          } else {
            let sql = { email: email, pwd: password };
            let query = connection.query(
              `insert into user set ${sql}`,
              (err, rows) => {
                if (err) throw err;
                return done(null, { email: email, id: rows.insertId });
              }
            );
          }
        }
      );
    }
  )
);

router.post(
  "/",
  passport.authenticate("local-join", {
    successRedirect: "/main",
    failurRedirect: "/join",
    failureFlash: true
  })
);

// router.post("/", (req, res) => {
//   const body = req.body;
//   const email = body.email;
//   const name = body.name;
//   const passwd = body.password;

//   const quert = connection.query(
//     `insert into user (email, name, pwd) values ('${email}','${name}','${passwd}')`,
//     (err, rows) => {
//       if (err) throw err;
//       else res.render("welcome.ejs", { name: name, id: rows.insertId });
//     }
//   );
// });

module.exports = router;
