import axios from 'axios';
import { error } from 'console';
import express from 'express';

const app = express();

app.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://bored-api.appbrewery.com/random");
        res.render("index.ejs",{activity: response.data});
    } catch {
        console.error("failed to make request", error.message);
        res.status(500).send("Failed to fetch file please try again");
    }
}) 