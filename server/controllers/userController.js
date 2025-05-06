
//  200 < status done or success >
//  300  < status redirect >
//  400 <401 Unauthorized (get), 403 Forbidden(post,update,delete), 404 Not Found >
//  500 < status server error >

const User = require('../models/Users')
// create user 
//  get , post , put, delete
//  req, res
//  post req : add new user (async)
exports.createUser =async (req,res)=>{
    console.log('Creating user...');
    try {
        const {name,email,phone} = req.body;
        const user = {name:name,email:email,phone:phone}
        const newUser = new User(user)
        await newUser.save();
        res.status(200).json({
            massage:'User created successfully',
            user:newUser
        });
        
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({
            message:'Server error',
            error:error.message
        });
        
    }
 
}
// get all users
exports.getAllUsers = async (req,res)=>{
    console.log("Getting all users...");
    try {
        const users = await User.find();
        res.status(200).json({
            message:'All users',
            users:users
        });
        
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({
            message:'Server error',
            error:error.message
        });
        
    }
}
//  create new fun to find user by id 
exports.filterUsersByArgs = async (req,res)=>{
    console.log("Getting user by args...");
    try {
        const {name,email,phone} = req.body;
        const user = await User.find({
            $or:[
                {name:name},
                {email:email},
                {phone:phone}
            ]
        })
        res.status(200).json({
            message:'User found',
            user:user
        });
        
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({
            message:'Server error',
            error:error.message
        });
        
    }
}
//  find user by id
exports.findUSerByID=async (req,res)=>{
    console.log("Getting User by id...");
    try {
        const {id} = req.params;
        const user = await User.findById(id)
        if(!user){
            return res.status(404).json({
                message:'User not found'
            });
        }
        res.status(200).json({
            message:'User found',
            user:user
        });
        
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({
            message:'Server error',
            error:error.message
        });
        
    }
}

//  update user by id
exports.updateUSerByID = async (req,res)=>{
    console.log("Updating user by id...");
    try {
        const {id} = req.params;
        const {name,email,phone} = req.body;
        const user = await User.findByIdAndUpdate(id,{
            name:name,
            email:email,
            phone:phone
        })
        if(!user){
            return res.status(404).json({
                message:'User not found'
            });
        }
        res.status(200).json({
            message:'User updated successfully',
        });
        
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({
            message:'Server error',
            error:error.message
        });
        
    }
}
exports.deleteUserByID = async (req,res)=>{
    console.log("Delete user by id...");
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id)
        if(!user){
            return res.status(404).json({
                message:'User not found'
            });
        }
        res.status(200).json({
            message:'User delete successfully',
        });
        
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({
            message:'Server error',
            error:error.message
        });
        
    }
}