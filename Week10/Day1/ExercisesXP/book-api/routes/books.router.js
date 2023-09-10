const express = require("express");

const {
  getAllBooks,
  getBook,
  creatBook,
} = require("../controllers/books.controller.js");

const b_router = express.Router();

// CRUD - Read - get all books
b_router.get("/", getAllBooks);

// CRUD - Read - get one books
b_router.get("/:id", getBook);

// POST/PUT - post one book
b_router.post("/", creatBook);

module.exports = { b_router };
