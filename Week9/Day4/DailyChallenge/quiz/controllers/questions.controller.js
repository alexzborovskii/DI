let gameState = {
    currQuestion: 0,
    score: 0,
};

const triviaQuestions = [
    {
        question: "What is the capital of France?",
        answer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: "Mars",
    },
    {
        question: "What is the largest mammal in the world?",
        answer: "Blue whale",
    },
];

const getQuestion = (req, res) => {
    let id = gameState.currQuestion;
    const question = triviaQuestions[gameState.currQuestion]['question'];
    const questionsAmount = triviaQuestions.length;
    if (!question) return res.sendStatus(404);
    res.status(200).json({question, id, questionsAmount});
};

const postAnswer = (req, res) => {
    const { answer } = req.body;
    if (triviaQuestions[gameState.currQuestion]["answer"].toLowerCase() == answer.toLowerCase()) {
        gameState.score++;
        res.json({ msg: `Right! Your score is ${gameState.score}` });
    } else {
        res.json({
            msg: `Wrong! Answer is ${triviaQuestions[gameState.currQuestion - 1]["answer"]}. Your score is ${gameState.score}`,
        });
    }
    gameState.currQuestion++;
};

const displayScore = (req, res) => {
    const finalScore = gameState.score;
    gameState.score = 0;
    gameState.currQuestion = 0;
    res.json({ msg: `Your final score is ${finalScore}` });
};

module.exports = { getQuestion, postAnswer, displayScore };
