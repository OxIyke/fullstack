import express from "express";
import bodyParser from "body-parser";
import { render } from "ejs";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  let fname = req.body["fName"];
  let lname = req.body["lName"];
  let sum = String(fname + lname);
  console.log(sum.length);
  res.render("index.ejs", {
    numberOfLetters: sum.length
  })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
