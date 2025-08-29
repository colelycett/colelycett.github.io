const express = require('express');
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Hey, you made a get request!");
})

app.listen(() => {
    console.log("Alive?");
})