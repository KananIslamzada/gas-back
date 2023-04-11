const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const { questions } = require("./data");
require("dotenv/config");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/questions", (_, res) => {
    try {
        res.status(200).json({ data: questions });
    } catch (error) {
        res.status(400).json(error)
    }
})

app.post("/user/create", async (req, res) => {
    const reqData = req.body;
    try {
        users.push(reqData);
        res.status(201).json({ message: "User created successfully!" })
    } catch (error) {
        res.status(400).json(error)
    }

});

app.get("/", (_, res) => {
    res.send("We are at Home");
});


app.listen(process.env.PORT || 3000, () =>
    console.log(`Listening port ${process.env.PORT || 3000}...`)
);
