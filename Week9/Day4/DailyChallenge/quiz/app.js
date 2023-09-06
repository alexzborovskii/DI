const express = require("express");
const { q_router } = require("./routes/quiz.router.js");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/quiz", q_router);

app.listen(process.env.PORT, () => {
    console.log(`run on port ${process.env.PORT}`);
});
//PORT = 3000
