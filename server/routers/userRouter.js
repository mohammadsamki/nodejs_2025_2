const express = require('express');
const router = express.Router();
const {profile, auThMiddleware, createUser,getAllUsers,filterUsersByArgs,findUSerByID,updateUSerByID,deleteUserByID,loginUser,homePage } = require('../controllers/userController');
const {adminMiddleware} = require('../middleware/adminMiddleware');
// Route to create a new user
router.post('/users',createUser)
// Route to get all users
router.get('/users',adminMiddleware,getAllUsers)
// Route to filter users by name, email, or phone
router.post('/users/filter',adminMiddleware,filterUsersByArgs)
// Route to find a user by ID
router.get('/users/:id',adminMiddleware,findUSerByID)
//  export the router
// Route to update a user by ID
router.put('/users/:id',updateUSerByID)
// Route to delete a user by ID
router.delete('/users/:id',adminMiddleware,deleteUserByID)
// Route to login a user
router.post('/users/login',loginUser)
// Route to get the home page
router.get('/home',auThMiddleware,homePage)
// Route to get the user profile
router.get('/profile',auThMiddleware,profile)
module.exports = router;
