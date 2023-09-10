const express = require("express");
const {
    register,
    login,
    getAllUsers,
    getUser,
    editUser
} = require("../controllers/users.controller.js");
const {
    regCheck,
    // usernameExists,
} = require("../middleware/users.middleware.js");

/* 
POST /register: Allow users to register by providing a username and password. Hash the password using bcrypt before storing it in the JSON file.
POST /login: Allow users to login by providing their username and password. Compare the hashed password from the JSON file with the provided password.
GET /users: Retrieve a list of all registered users from a JSON file (only for demonstration purposes; no authentication required).
GET /users/:id: Retrieve a specific user by ID from the JSON file (only for demonstration purposes; no authentication required).
PUT /users/:id: Update a user’s information by ID in the JSON file (only for demonstration purposes; no authentication required). 
*/

const u_router = express.Router();

// Register
u_router.post("/register", regCheck, register);

// Login
// u_router.post("/login", usernameExists, login);
u_router.post("/login", login);

// Get all users
u_router.get("/users", getAllUsers);

// Get one users
u_router.get("/users/:id/", getUser );

// Update a user item by ID
// u_router.put("/users/:id/", usernameExists, editUser);
u_router.put("/users/:id/", editUser);

module.exports = { u_router };
