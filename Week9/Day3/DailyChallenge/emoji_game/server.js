const express = require("express");
const lodash = require("lodash");
// const restify = require("restify");
const dotenv = require("dotenv");
const { emojis } = require("./emojis.js");
const cors = require("cors");

dotenv.config();
const app = express();
app.use(cors({origin: 'http://127.0.0.1:5501'}));
app.use(
  function crossOrigin(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
  }
);

// app.use(function (req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   next();
// });

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
  console.log(answers)
  res.json(answers);
});

app.post("/api/answer/", (req, res) => {
  const { answer, task } = req.body;
  const corrAnswer = emojis.find((element) => element.emoji == task);
  if (corrAnswer["name"] == answer) {
    gameState.score++;
    res.json({ message: "Correct guess!", score: gameState.score });
  } else {
    res.json({ message: "Incorrect guess.", score: gameState.score });
  }
});

