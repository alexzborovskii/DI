const submit = document.getElementById("submit");
const form = document.getElementById("answers");
const emojiH = document.getElementById("emoji");

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
  element.innerText = `Who is it: ${data["emoji"]}?`;
}

submit.addEventListener("click", (e) => {
  e.preventDefault();

  const ansInputs = document.getElementsByTagName("input");
  let answer = "";
  for (i = 0; i < ansInputs.length; i++) {
    if (ansInputs[i].checked) {
      answer = Number(ansInputs[i].value);
    }
  }
  const task = emoji.innerText;
  console.log(task);

  const url = "http://localhost:5000/api/game/";

  fetch("url", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ answer, task }),
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error("network returns error");
    }
    return response.json();
  })
  .then((resp) => {
    let respdiv = document.createElement("pre");
    respdiv.innerHTML = JSON.stringify(resp, null, 2);
    body.append(respdiv);
    console.log("resp from server ", resp);
  })
  .catch((error) => {
    // Handle error
    console.log("error ", error);
  });

});

getQuestion();
