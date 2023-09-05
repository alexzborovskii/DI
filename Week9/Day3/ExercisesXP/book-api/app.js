const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/* Define a basic data array containing a few book objects. 
Each book object should have properties like 
id, title, author, and publishedYear. */

app.listen(process.env.PORT, () => {
  console.log(`run on port ${process.env.PORT}`);
});

const data = [
  { id: 1, title: "First book", author: "Cool Old Guy", publishedYear: "2010" },
  {
    id: 2,
    title: "Second book",
    author: "Another Old Guy",
    publishedYear: "2005",
  },
  {
    id: 3,
    title: "Third book",
    author: "Brave Young Lady",
    publishedYear: "2023",
  },
];

/* Implement the “Read all” route by defining a route at GET /api/books. 
Send a JSON response with the books array. */

app.get("/api/books/", (req, res) => {
  try {
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

/* If the book is found, send a JSON response with the book details 
  and a status code of 200 (OK). If the book is not found, send a 404 
  status with a “Book not found” message. */

app.get("/api/books/:id/", (req, res) => {
  try {
    const id = req.params.id;
    const post = data.find((item) => item.id == id);
    if (!post) return res.send(404).json({ msg: "Book not found" });
    res.send(200).json(post);
  } catch (err) {
    console.log(err);
  }
});

/* Add the new book to the books array and return a JSON response with the new book and a status code of 201 (Created).
 */

app.post("/api/books/", (req, res) => {
  try {
    const { title, author, publishedYear } = req.body;
    const newBook = {
      id: data.length + 1,
      title,
      author,
      publishedYear,
    };
    data.push(newBook);
    res.json({new_book: newBook, status: 201});
  } catch (err) {
    console.log(err);
  }
});
