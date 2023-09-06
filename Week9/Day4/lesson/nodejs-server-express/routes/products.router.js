const express = require("express");
const p_router = express.Router();
const {logger} = require('../middlewares/utils.js')
const {
  getAllProducts,
  searchProduct,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products.controller.js");


p_router.get("/", logger, getAllProducts);

p_router.get("/search", searchProduct);

p_router.get("/:id", getProduct);

p_router.post("/", createProduct);

p_router.put("/:id/", updateProduct);

p_router.delete("/:id/", deleteProduct);

module.exports = { p_router };
