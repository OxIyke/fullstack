import express from 'express';

const app = express();
const port = 3000;
const day = new Date().getDay();
let msg = "";
let dayt = "";


app.get("/", (req, res) => {
    if (day === 0 || day === 7) {
        msg = "touch some grass.";
        dayt = "weekend"
    } else {
        msg = "workhard";
        dayt = "week day"
    }

    res.render("index.ejs", {
        dayType: dayt,
        message: msg
    });
});


app.listen(port, () => {
    console.log(`server has started at ${port}`)
});