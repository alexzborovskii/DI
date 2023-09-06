const questionField = document.getElementById("question");
const submit = document.getElementById("submit");
const answer = document.getElementById("answer");
const response = document.getElementById("response");

let currQuestion = -1;
let questionsAmount = -1;

async function getQuestion() {
    submit.style.display = 'block';
    answer.style.display = 'block';
    response.style.display = 'block';

    try {
        const url = "http://localhost:3000/quiz/";
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Couldn`t get question");
        } else {
            let data = await response.json();
            currQuestion = data.id + 1;
            questionsAmount = data.questionsAmount;
            questionField.innerText = data.question;
        }
    } catch (error) {
        console.log(error);
    }
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    let answerValue = answer.value;
    const obj = { answer: answerValue };

    fetch("http://localhost:3000/quiz/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    })
        .then((res) => res.json())
        .then((data) => {
            response.innerHTML = `${data.msg}`;
        })
        .catch((e) => console.log(e));

    if (currQuestion == questionsAmount) {
        displayScore();
        submit.style.display = 'none';
        answer.style.display = 'none';
        response.style.display = 'none';

    } else {
        answer.value = "";
        getQuestion();
    }
});

async function displayScore() {
    try {
        const url = "http://localhost:3000/quiz/score/";
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Couldn`t get question");
        } else {
            let data = await response.json();
            questionField.innerText = data.msg;
            currQuestion = 0;
        }
    } catch (error) {
        console.log(error);
    }
}

getQuestion();
