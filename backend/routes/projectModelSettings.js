require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const ProjectModel = require('../models/projectModel.js');

const ProjectRouter = express.Router();

ProjectRouter.get("/", async(req,res) =>{
    try{
        const response = await ProjectModel.find({});
        res.json(response);
    } catch(err){
        res.json(err);
    }
});

module.exports=ProjectRouter;