const express = require("express");
const {getAllTasks, addTask, editTask, deleteTask} = require('../controllers/tasks.controller.js')
// Sample in-memory database for storing to-do items
const todos = [
    { id: 1, name: "buy milk", description: "go to the store and buy milk" },
    { id: 2, name: "buy bread", description: "go to the store and buy bread" },
    {
        id: 3,
        name: "walk the dog",
        description: "go outside and walk you lovely doggo",
    },
];

const t_router = express.Router();

// Get all to-do items
t_router.get("/", getAllTasks );

// Add a new to-do item
t_router.post("/", addTask);

// Update a to-do item by ID
t_router.put("/:id/", editTask);

// Delete a to-do item by ID
t_router.delete("/:id/", deleteTask);

module.exports = { t_router };
