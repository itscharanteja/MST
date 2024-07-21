const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hellomysql",
  database: "employee_db",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});

app.use(bodyParser.json());
app.use(cors());

app.post("/employees", (req, res) => {
  const employee = {
    name: req.body.name,
    position: req.body.position,
    salary: req.body.salary,
  };
  const sql = "INSERT INTO employees SET ?";
  db.query(sql, employee, (err, result) => {
    if (err) throw err;
    res.send("Employee added...");
  });
});

app.get("/employees", (req, res) => {
  const sql = "SELECT * FROM employees";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.put("/employees/:id", (req, res) => {
  const newEmployee = {
    name: req.body.name,
    position: req.body.position,
    salary: req.body.salary,
  };
  const sql = `UPDATE employees SET ? WHERE id = ${req.params.id}`;
  db.query(sql, newEmployee, (err, result) => {
    if (err) throw err;
    res.send("Employee updated...");
  });
});

app.delete("/employees/:id", (req, res) => {
  const sql = `DELETE FROM employees WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send("Employee deleted...");
  });
});
app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
