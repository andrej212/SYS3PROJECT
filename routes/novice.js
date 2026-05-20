const express = require("express");
const novice = express.Router();

//ovo nije pravi root servera jer ja index.js mountuje sa app.use("novice",novie)
novice.get("/", (req,res)=>{
    console.log("Novice");
    res.json({message : "usao sam u novice.js"});
});

module.exports = novice;