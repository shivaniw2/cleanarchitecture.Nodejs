const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        minLength: 5,
        maxLength:50
    },
    email:{
        type:String,
        required: true,
        minLength: 10,
        maxLength:255,
        unique:true,
    },
    password:{
        type:String,
        required: true,
        minLength: 6,
        maxLength:1025,
    }
});

//adding additional method to schema
userSchema.methods.generateToken = function(){
    const token = jwt.sign({_id: this._id, isAdmin:this.isAdmin}, config.get('jwtPrivateKey') ); // returning token
    return token;
}

//create schema with collection name as 'User'
const User = mongoose.model('User', userSchema);

module.exports = {User, userSchema};