const express = require("express");

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
t_router.get("/", (req, res) => {
    res.send(todos);
});

// Add a new to-do item
t_router.post("/", (req, res) => {
    console.log(req.body);
    const { name, description } = req.body;
    const newTodo = {
        id: todos.length + 1,
        name,
        description,
    };
    todos.push(newTodo);
    res.json(todos);
});

// Update a to-do item by ID
t_router.put("/:id/", (req, res) => {
    const id = req.params.id;
    const { name, description } = req.body;
    let index = todos.findIndex((item) => (item.id == id));
    todos[index] = { ...todos[index], name: name, description: description };
    res.json(todos);
});

// Delete a to-do item by ID
t_router.delete("/:id/", (req, res) => {
    const id = req.params.id;
    const index = todos.findIndex((item) => (item.id = id));
    if (index === -1) return res.status(404).json({ msg: "todo not found" });
    todos.splice(index, 1);
    res.json(todos);
});

module.exports = { t_router };
