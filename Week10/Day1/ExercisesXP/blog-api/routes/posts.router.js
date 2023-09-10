const express = require("express");

const {
  getAllPosts,
  getPost,
  creatPost,
  updatePost,
  deletePost,
} = require("../controllers/posts.controller.js");

const p_router = express.Router();

// CRUD - Read - get all posts
p_router.get("/", getAllPosts);

// CRUD - Read - get one posts
p_router.get("/:id", getPost);

// body - POST/PUT
p_router.post("/", creatPost);

// CRUD - Update a post - PUT
p_router.put("/:id", updatePost);

// CRUD - Delete a post - DELETE
p_router.delete("/:id", deletePost);

module.exports = { p_router };
