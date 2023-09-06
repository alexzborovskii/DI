// routes/books.router.js
const express = require("express");

// Sample in-memory database for storing books
const books = [
    { id: 1, name: "War and piece", author: "Tolstoy" },
    { id: 2, name: "Harry Potter", description: "J.K. Rowling" },
];

const b_router = express.Router();

// Get all books
b_router.get("/", (req, res) => {
    res.send(books);
});

// Add a new book
b_router.post("/", (req, res) => {
    console.log(req.body);
    const { name, description } = req.body;
    const newTodo = {
        id: books.length + 1,
        name,
        description,
    };
    books.push(newTodo);
    res.json(books);
});

// Update a book by ID
b_router.put("/:id/", (req, res) => {
    const id = req.params.id;
    const { name, description } = req.body;
    let index = books.findIndex((item) => item.id == id);
    books[index] = { ...books[index], name: name, description: description };
    res.json(books);
});

// Delete a book by ID
b_router.delete("/:id/", (req, res) => {
    const id = req.params.id;
    const index = books.findIndex((item) => (item.id = id));
    if (index === -1) return res.status(404).json({ msg: "book not found" });
    books.splice(index, 1);
    res.json(books);
});

module.exports = { b_router };
