const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL).then(console.log("connected to MongoDB")).catch((err)=> console.log(err));

app.use(express.json());

app.listen(3000, ()=>{
    console.log("listening...");
});

