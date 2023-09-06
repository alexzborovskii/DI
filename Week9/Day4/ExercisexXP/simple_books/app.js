const express = require("express");
const { b_router } = require("./routes/books.router.js");

const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/books/", b_router);

app.listen(process.env.PORT, () => {
    console.log(`run on port ${process.env.PORT}`);
});
//PORT = 3000
