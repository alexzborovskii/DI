// function clicked() {
//     alert("Button was clicked");
// }
// function mouseOver() {
//     console.log("mouseOver event");
// }


// const button = document.getElementById("clickEvent");
// console.log(button);

// button.addEventListener("click", clicked)
// button.addEventListener("click", function click(){
//     alert("clicked button");
// });


// button.addEventListener("click", ()=>{
//     alert("clicked")
// });

// button.onclick = clicked;


// button.onmouseover = mouseOver;
// const innerDiv = document.getElementById("innerDiv");
// // innerDiv.onmouseover = mouseOver;
// innerDiv.onmouseout = mouseOver;

// const table = document.getElementById("sampleTable");
// function insertRow() {
//     const row = document.createElement("tr");
//     const firstTD = document.createElement("td");
//     firstTD.textContent = "first cell";
//     const secondTD = document.createElement("td");
//     secondTD.textContent = "second cell";
//     row.appendChild(firstTD);
//     row.appendChild(secondTD);
//     table.appendChild(row)
// }


// const innerDiv = document.getElementById("innerDiv");



// function RespondClick() {
//     console.log("Div Clicked");
// }

// // function RespondClick(e) { 
// //     console.log(e.target);
// // } 

// function RespondMouseOver() {
//     console.log("My mouse is over the btn")
// }

// function RespondMouseOut() {
//     console.log("My mouse is out of the btn")
// }



// innerDiv.addEventListener("click", RespondClick); 
// innerDiv.addEventListener("mouseover", RespondMouseOver); 
// innerDiv.addEventListener("mouseout", RespondMouseOut);




// const myInput = document.getElementById("myInput");

// myInput.oninput=function (e){
//     console.log(e.target.value)
// }

// const newButton = document.getElementById("jsstyle");
// newButton.addEventListener("mouseout", RespondMouseOut)
// newButton.addEventListener("click", RespondClick)
// newButton.addEventListener("mouseover", RespondMouseOver)


// const parentDiv = document.getElementById("parent");
// const childDiv = document.getElementById("child");
// const infanttDiv = document.getElementById("infant");

// parentDiv.style.height = "300px";
// childDiv.style.height = "200px";
// infanttDiv.style.height = "100px";

// parentDiv.style.border = "2px solid red";
// childDiv.style.border = "2px solid black";
// infanttDiv.style.border = "2px solid green";

// parentDiv.onclick = () => console.log("parent");
// childDiv.onclick = () => console.log("child");
// infanttDiv.onclick = () => console.log("infant");




// console.log(document.forms);
// console.log(document.forms.form1)
// console.log(document.forms[0].name)
// console.log(document.forms[0].elements.firstInputName)

// const myValue = (document.forms[0].elements.firstInputName.value = "hello i`m value");
// console.log(myValue);


// myForms = document.forms;
// console.log(myForms[0][0]['value']);
// console.log(myForms[0][1]['value']);


// function getvalue(event) {
//     event.preventDefault();
//     console.log(event.target.elements.fname.value);
//     console.log(event.target.elements.lname.value);
// }



// let dropdown = document.getElementById("A");
// // console.log(dropdown.options);
// dropdown.selectedIndex = 2;

// let inputs = table.getElementsByTagName('input');
// console.log(inputs)

// for (let input of inputs) {
//   alert( input.value + ': ' + input.checked );
// }



// // // // TIMEOUT
// function testTimpit(){
//     alert("after 10 seeconds")
// }


// setTimeout(()=>{
//     alert("hello");
// }, 2000);

// const timeoutId = setTimeout(function (){
//     alert("after 5 seconds")
// }, 5000)

// setTimeout(testTimeout, 10000);


// clearTimeout(timeoutId);


// const banner = document.getElementById("banner");
// function makeVisible() {
//     banner.style.display = "block";
// }
// setTimeout(makeVisible, 5000);



// setTimeout(() => {
//     const div = document.createElement("div");
//     div.innerText = "Sale ends in 10 mins";
//     document.body.append(div);
// }, 1000)


// let num = 0;
// const intervalId = setInterval(()=>{
//     num++;
//     const div = document.createElement("div");
//     div.innerText = "int number" + num;
//     document.body.append(div);
// }, 2000);


// const button = document.getElementById("button");
// button.addEventListener("click", function(){ clearInterval(intervalId)});



const child = document.getElementById("child");
child.style.left = "0px";

let position = 0;
const intervalId = setInterval(()=>{
    if (position != 300){
        position++;
        child.style.left = position+"px";
        child.style.top = position+"px";
        
    } else{
        clearInterval(intervalId);
    }
}, 10)
