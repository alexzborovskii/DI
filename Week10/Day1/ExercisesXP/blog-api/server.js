const express = require("express");
const dotenv = require("dotenv");
const { p_router } = require("./routes/posts.router.js");

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`run on port ${process.env.PORT}`);
});
//port 3000

app.use("/posts/", p_router);
