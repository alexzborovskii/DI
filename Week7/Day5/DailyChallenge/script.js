function checkAnogram(firstWord, secondWord) {
     return cleanWord(firstWord) === cleanWord(secondWord);
}

function cleanWord(word) {
    return word.split(" ").map((element) => element.trim()).reduce((acc, el) => acc + el).toLowerCase().split("").sort().join("");
}


console.log(checkAnogram("long", "nogl"))
console.log(checkAnogram("Astronomer", "Moon starer"))
console.log(checkAnogram("School master", "The classroom"))
console.log(checkAnogram("The Morse Code", "Here come dots"))
console.log(checkAnogram("The Morse Code", "Here come dotsT"))
console.log(checkAnogram("The Morse CodeT", "Here come dots"))