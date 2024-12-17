const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app=express();
app.use(express.json()); // Parse JSON bod
app.use(cors()); // Comm w frontend/backend

//connect mongodb db
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{console.log("MongoDB Connected.");})
    .catch((err)=>{console.log("MongoDB Connection error: ",err);});

app.listen(process.env.SRVR, () =>console.log("Server ON: ", process.env.SRVR));