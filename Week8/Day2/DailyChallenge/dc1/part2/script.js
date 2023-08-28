const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

let missingSymbol = "";
let userInput = "";

function lettersCheck(string, object) {
    missingSymbol = "";
    const objKeys = Object.keys(object);
    const lettersArr = string.split('');
    for (let i = 0; i < lettersArr.length; i++) {
        if (!objKeys.includes(lettersArr[i])) {
            console.log(!objKeys.includes(lettersArr[i]))
            missingSymbol = lettersArr[i];
            return false
        }
    }
    return true
}

function toJs() {
    const newPromise = new Promise((resolve, reject) => {
        const morseJS = JSON.parse(morse);
        if (morseJS == '') {
            reject("Object is empty")
        } else {
            resolve(morseJS)
        }
    })
    return newPromise
}

function toMorse(morseJS) {
    const newPromise = new Promise((resolve, reject) => {
        userInput = prompt("Type in the string");
        let userInput2 = userInput.toLowerCase()
        const symbolsCheck = lettersCheck(userInput2, morseJS);
        if (!symbolsCheck) {
            reject(`Symbol  ${missingSymbol} is not in dictionary`)
        } else {
            let morseArr = [];
            for (let symbol of userInput2) {
                morseArr.push(morseJS[symbol])
            }
            resolve(morseArr)
        }
    })
    return newPromise
}

function joinWords(morseTranslation) {
    const body = document.querySelector("body");
    const p = document.createElement("p");
    p.innerText = `"${userInput}" gives you\n` + morseTranslation.join('\n');
    body.append(p);
}



toJs()
    .then((arr) => toMorse(arr))
    .then((result) => joinWords(result))
    .catch((err) => console.log(err))