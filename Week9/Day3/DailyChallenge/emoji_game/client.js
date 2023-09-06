const submit = document.getElementById("submit");
const form = document.getElementById("answers");
const emojiH = document.getElementById("emoji");

const response = document.getElementById("response");

let currEmoji = "";

async function getQuestion() {
    try {
        const url = "http://localhost:5000/api/game/";
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Couldn`t get languages");
        } else {
            let data = await response.json();
            displayAnswers(form, data);
            displayEmoji(emojiH, data);
        }
    } catch (error) {
        console.log(error);
    }
}

function displayAnswers(element, data) {
    for (let i = 0; i < data["allAnswers"].length; i++) {
        const newInput = document.createElement("input");
        newInput.type = "radio";
        newInput.name = "answer";
        newInput.value = data["allAnswers"][i];
        newInput.id = `input${i}`;
        const newInputLabel = document.createElement("label");
        newInputLabel.for = newInput.id;
        newInputLabel.innerText = data["allAnswers"][i];

        element.append(newInput, newInputLabel);
    }
}

function displayEmoji(element, data) {
    currEmoji = data["emoji"];
    element.innerText = `Who is it: ${currEmoji}?`;
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    const ansInputs = document.querySelectorAll("input");
    console.log("ansInputs: ", ansInputs);
    let answer = "";
    for (let i = 0; i < ansInputs.length; i++) {
        if (ansInputs[i].checked) {
            answer = ansInputs[i].value;
        }
    }
    console.log(answer);
    const obj = { answer: answer, task: currEmoji };

    const url = "http://localhost:5000/api/answer/";
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            
            response.innerHTML = `${data.message} Score is ${data.score}`;
        })
        .catch((e) => console.log(e));
    form.innerText = "";
    getQuestion();
});

getQuestion();
