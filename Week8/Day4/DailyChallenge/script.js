const btn = document.getElementById("btn");
const firstCurrency = document.getElementById("first-select");
const secondCurrency = document.getElementById("second-select");
const firstAmount = document.getElementById("first-amount");

async function getAllCurrencies() {
    try {
        const url = "https://v6.exchangerate-api.com/v6/8f54b1e928b33e33b6c7931e/codes";
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Couldn`t get currencies")
        } else {
            let data = await response.json();
            displayAllCurrencies(firstCurrency, data["supported_codes"]);
            displayAllCurrencies(secondCurrency, data["supported_codes"]);
        }
    } catch (error) {
        console.log(error)
    }
}

function displayAllCurrencies(element, data) {
    for (let i = 0; i < data.length; i++) {
        const newOption = document.createElement("option");
        newOption.value = data[i][0];
        newOption.innerText = `${data[i][0]} - ${data[i][1]}`;
        element.append(newOption);
    }
}

async function converValues() {
    const fCurr = firstCurrency.value;
    const sCurr = secondCurrency.value;
    const fAmount = firstAmount.value;
    const url = `https://v6.exchangerate-api.com/v6/8f54b1e928b33e33b6c7931e/pair/${fCurr}/${sCurr}`
    try {
        const response = await fetch(url);
        if (!response.ok) {
            displayPersonError();
        } else {
            let data = await response.json();
            const convRate = data.conversion_rate;
            const resCalc = fAmount * convRate;
            const resField = document.getElementById("result");
            resField.innerText = resCalc;
        }
    } catch (error) {
        console.log(error)
    }
}

getAllCurrencies()
btn.addEventListener('click', converValues)