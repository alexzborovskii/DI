const logBtn = document.getElementById("log-btn");

logBtn.addEventListener("click", (e) => {
    const logAnswer = document.getElementById("log-answer");
    try {
        e.preventDefault();
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        const userData = {
            username,
            password,
        };

        fetch("http://localhost:3000/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
            .then((res) => res.json())
            .then((data) => {
                logAnswer.innerHTML = `${data.msg}`;
            })
            .catch((e) => console.log(e));
    } catch (error) {
        console.log(error);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll("input");

    for (const i of inputs) {
        i.addEventListener("input", checkSubmit);
    }

    logBtn.disabled = true;
    function checkSubmit() {
        let isValid = true;
        for (const i of inputs) {
            isValid = isValid && !!i.value;
        }
        logBtn.disabled = !isValid;
    }
});
