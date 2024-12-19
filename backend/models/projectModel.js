const mongoose = require('mongoose');

const ProjSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    skills:[{
        type: String,
        required: true
    }],
    desc:{
        type: String,
        required: true
    },
    imgURL:{
        type: String,
        required:false
    },
    srcLink:{
        type:String,
        required:false
    }
});

const ProjectModel = mongoose.model("projects",ProjSchema);
module.exports = ProjectModel;