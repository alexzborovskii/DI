const { books } = require("../config/db.js");
const {
  _getAllBooks,
  _getBookById,
  _insertBook,
} = require("../models/books.model.js");

const getAllBooks = async(req, res) => {
  try {
    const data = await _getAllBooks();
    res.json(data);
  } catch (error) {
      console.log(error);
      res.status(404).json({ msg: "Couldnt find the books" });
  }
};

const getBook = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await _getBookById(id);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(404).json({ msg: "Book not found" });
  }
};
  
const creatBook = async (req, res) => {
  try {
    const data = await _insertBook(req.body);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(404).json({ msg: error.message });
  }
};


module.exports = {
  getAllBooks,
  getBook,
  creatBook,
};
