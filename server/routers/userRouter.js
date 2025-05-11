const express = require('express');
const router = express.Router();
const { createUser,getAllUsers,filterUsersByArgs,findUSerByID,updateUSerByID,deleteUserByID,loginUser } = require('../controllers/userController');

// Route to create a new user
router.post('/users',createUser)
// Route to get all users
router.get('/users',getAllUsers)
// Route to filter users by name, email, or phone
router.post('/users/filter',filterUsersByArgs)
// Route to find a user by ID
router.get('/users/:id',findUSerByID)
//  export the router
// Route to update a user by ID
router.put('/users/:id',updateUSerByID)
// Route to delete a user by ID
router.delete('/users/:id',deleteUserByID)
// Route to login a user
router.post('/users/login',loginUser)
module.exports = router;
