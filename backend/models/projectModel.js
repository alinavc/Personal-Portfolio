const mongoose = require('mongoose');

const ProjDisplay = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    skills:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    imgURL:{
        type: String,
        required:false
    },
    imgLink:{
        type:String,
        required:false
    }
});

export const projModel = mongoose.model("projColl",ProjDisplay);