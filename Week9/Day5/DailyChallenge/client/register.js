const regBtn = document.getElementById("reg-btn");
const form = document.querySelector("form");
regBtn.addEventListener("click", (e) => {
    const regAnswer = document.getElementById("reg-answer");
    try {
        e.preventDefault();

        form.checkValidity();
        form.reportValidity();
        
        let fname = document.getElementById("fname").value;
        let lname = document.getElementById("lname").value;
        let email = document.getElementById("email").value;
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;


        const userData = {
            fname,
            lname,
            email,
            username,
            password,
        };

        fetch("http://localhost:3000/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
            .then((res) => res.json())
            .then((data) => {
                regAnswer.innerHTML = `${data.msg}`;
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

    regBtn.disabled = true;

    function checkSubmit() {
        let isValid = true;
        for (const i of inputs) {
            isValid = isValid && !!i.value;
        }
        regBtn.disabled = !isValid;
    }
});
