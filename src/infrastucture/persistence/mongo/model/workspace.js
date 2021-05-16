const mongoose = require('mongoose');

const workspaceSchema = new mongoose.Schema({
    workspaceName:{
        type:String,
        required: true,
        minLength: 5,
        maxLength:50
    },
    location:{
        type:String,
        required: true,
        minLength: 5,
        maxLength:50
    },
    attributes:{
        type: Array,
        required:false
    },
    workspaceType:{
        type:String,
        required: true,
        minLength: 2,
        maxLength:50
    },
    status:{
        type:Boolean,
        required: true,
    }
});

const WorkspaceDto = mongoose.model('Workspace', workspaceSchema);

module.exports = {WorkspaceDto, workspaceSchema};