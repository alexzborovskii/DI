const express = require("express");
const {
    getQuestion,
    postAnswer,
    displayScore,
} = require("../controllers/questions.controller.js");
const q_router = express.Router();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Get question
q_router.get("/", getQuestion);

// Post answer
q_router.post("/", postAnswer);

// Display score
q_router.get("/score", displayScore);

module.exports = { q_router };