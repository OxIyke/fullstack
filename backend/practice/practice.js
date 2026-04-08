import axios from "axios";
import express from "express";

const app = express();

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    res.render("index.ejs", { activity: response.data });
  } catch (error) {
    console.error(`failed to make request: ${error}`);
    res.status(500).send("failed to fetch activity please try again.");
  }
});
