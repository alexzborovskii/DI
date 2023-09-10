const { db } = require("../config/db.js");

const _getAllBooks = () => {
    return db("books").select("id", "title", "author").orderBy("id");
};

const _getBookById = (id) => {
    return db("books").select("id", "title", "author").where({ id });
};

const _insertBook = ({ title, author }) => {
    return db("books").insert({ title, author }, ["id", "title", "author"]);
};


module.exports = {
    _getAllBooks,
    _getBookById,
    _insertBook,
};
