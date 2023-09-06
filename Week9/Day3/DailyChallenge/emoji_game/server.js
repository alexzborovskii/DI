const express = require("express");
const lodash = require("lodash");
const dotenv = require("dotenv");
const { emojis } = require("./emojis.js");
const cors = require("cors");


dotenv.config();
const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// PORT = 5000;

app.listen(process.env.PORT, () => {
  console.log(`run on port ${process.env.PORT}`);
});


let gameState = {
  score: 0,
  currEmoji: "",
};

function getAnswers(arr) {
  const { emoji, name: corrAnswer } = lodash.sample(emojis);
  let allAnswers = lodash.sampleSize(emojis, 3).map((item) => item.name);
  allAnswers.push(corrAnswer);
  allAnswers = lodash.shuffle(allAnswers);
  gameState.currEmoji = corrAnswer;
  return { emoji, allAnswers };
}

app.get("/api/game/", (req, res) => {
  const answers = getAnswers(emojis);
  // console.log(answers)
  res.json(answers);
});

app.post("/api/answer/", (req, res) => {
  const { answer, task } = req.body;
  console.log("task: ", task);
  console.log("answer: ", answer);
  const corrAnswer = emojis.find((element) => element.emoji == task);
  console.log("corrAnswer: ", corrAnswer)
  if (corrAnswer["name"] == answer) {
    gameState.score++;
    res.json({ message: "Correct guess!", score: gameState.score });
  } else {
    res.json({ message: `Incorrect guess. Correct is ${corrAnswer["name"]}`, score: gameState.score });
  }
});

