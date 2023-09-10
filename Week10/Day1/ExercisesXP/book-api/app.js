const express = require("express");
const dotenv = require("dotenv");
const { b_router } = require("./routes/books.router.js");

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`run on port ${process.env.PORT}`);
});
//port 5000

app.use("/api/books", b_router);
