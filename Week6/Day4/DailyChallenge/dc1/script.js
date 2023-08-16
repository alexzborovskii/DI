//1
let sentence = "The movie is not that bad ! I like it";
// let sentence = "This movie is not so bad ! ";
// let sentence = "This dinner is bad !";
//2
let wordNot = sentence.indexOf("not");
console.log(wordNot);
//3
let wordBad = sentence.indexOf("bad");
console.log(wordBad);

//4
if ((wordBad > wordNot) && (wordNot > -1)){
    let sentence_arr = sentence.split('');
    // console.log(sentence_arr);
    sentence_arr.splice(wordNot, wordNot, "good");
    // console.log(sentence_arr);
    let resSentence = sentence_arr.join("")
    console.log(resSentence)
}
//5
else if ((wordBad < wordNot) || (wordNot == -1) || (wordBad == -1)){
    console.log(sentence)
}