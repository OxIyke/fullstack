import express from 'express'

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("I am the home page")
});

app.get("/about", (req, res) => {
  res.send("I am the about");
});

app.get("/contact", (req, res) => {
  res.send("<h3>Contact me at 09132312421</h3>");
});

app.listen(port, () => {
  console.log(`The server is running at ${port}`);
});