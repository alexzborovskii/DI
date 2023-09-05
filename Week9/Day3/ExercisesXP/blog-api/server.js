const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`run on port ${process.env.PORT}`);
});

const data = [
  { id: 1, title: "First post", content: "Content of the first post" },
  { id: 2, title: "Second post", content: "Content of the second post" },
  { id: 3, title: "Third post", content: "Content of the third post" },
];

/* 
Implement the following routes using Express:
+ GET /posts: Return a list of all blog posts.
+ GET /posts/:id: Return a specific blog post based on its id.
+ POST /posts: Create a new blog post.
+ PUT /posts/:id: Update an existing blog post.
+ DELETE /posts/:id: Delete a blog post.

+ Implement error handling for invalid routes and server errors.

+ Start the Express app and listen on a specified port (e.g., 3000).
 */

// GET /posts: Return a list of all blog posts:
app.get("/api/posts", (req, res) => {
  try {
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

// GET /posts/:id: Return a specific blog post based on its id:
app.get("/api/posts/:id/", (req, res) => {
  try {
    const id = req.params.id;
    const post = data.find((item) => item.id == id);
    if (!post) return res.sendStatus(404); //res.send(404).json({msg:'Post not found'})
    res.json(post);
  } catch (err) {
    console.log(err);
  }
});

// POST /posts: Create a new blog post.
app.post("/api/posts", (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = {
      id: data.length + 1,
      title,
      content,
    };
    data.push(newPost);
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});

// PUT /posts/:id: Update an existing blog post:
app.put("/api/posts/:id/", (req, res) => {
  try {
    const id = req.params.id;
    const { title, content } = req.body;
    let index = data.findIndex((item) => item.id == id);
    data[index] = { ...data[index], title: title, content: content };
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});

// DELETE /posts/:id: Delete a blog post.
app.delete("/api/posts/:id/", (req, res) => {
  try {
    const id = req.params.id;
    const index = data.findIndex((item) => item.id == id);
    if (index === -1) return res.status(404).json({ msg: "not found" });
    data.splice(index, 1);
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});
