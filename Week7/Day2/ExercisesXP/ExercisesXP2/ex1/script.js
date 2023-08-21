// /******** Part 1 ********/
// setTimeout(function (){
//         alert("Hello World")
//     }, 2000);

/******** Part 2 ********/

function addP() {
    const newP = document.createElement("p");
    newP.innerText = "Hello World";
    const container = document.getElementById("container");
    container.append(newP);
}

setTimeout(addP, 3000);

/******** Part 3 ********/
const myButton = document.getElementById("clear");
let counter = 0;
const PARAGRAPHS_AMOUNT = 5;
// stop with buttom
myButton.addEventListener("click", ()=>{
    clearInterval(intervalID);
})
let intervalID = setInterval(()=>{
    if (counter < PARAGRAPHS_AMOUNT-1) {
        addP();
        counter++;
    // stop by amount
    } else {
        clearInterval(intervalID);
    }
}, 2000);


