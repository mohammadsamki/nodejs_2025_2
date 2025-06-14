const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
name:{type:String,required:true},
email:{type:String,required:true,unique:true},
phone:{type:Number,required:true},
password:{type:String,required:true},
role:{type:String,default:'user',enum:['user','admin']},
})
module.exports = mongoose.model('User',userSchema);