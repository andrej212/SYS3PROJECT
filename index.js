const dotenv = require("dotenv");
dotenv.config(); 

const express = require("express");
const app = express();


//
const db = require("./db/connection"); 
const novice = require("./routes/novice");

const port = process.env.PORT || 5000 ;

app.use(express.json());

// test route
app.get("/", (req, res) => {
    res.send("Server is working!");
});

// routes
app.use("/novice", novice);

app.listen(port, () => {
    console.log("Server running on port: " + port);
});