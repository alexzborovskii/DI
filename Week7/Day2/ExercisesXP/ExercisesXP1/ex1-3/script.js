// /******** Exercise 1 ********/
// // 1
// const headerOne = document.querySelector("h1");
// console.log(headerOne.innerText);
// // 2
// const ps = document.querySelectorAll("p");
// ps[3].remove();
// // 3
// const headerTwo = document.querySelector("h2");
// headerTwo.addEventListener("click", (()=>{
//     headerTwo.style.background = "red";
// }))
// // 4
// const headerThree = document.querySelector("h3");
// headerThree.addEventListener("click", (()=>{
//     headerTwo.style.display = "none";
// }))
// // 5
// const button15 = document.getElementById("button15");
// button15.addEventListener("click", (()=>{
//     for (p of ps) {
//         p.style.fontWeight = "bold";
//     }
// }))

// /******** Exercise 2 ********/
// // 1
// const form2 = document.forms[0];
// console.log(form2);
// // 2
// const inputid1 = document.getElementById("fname");
// const inputid2 = document.getElementById("lname");
// const inputid3 = document.getElementById("submit");
// console.log(inputid1);
// console.log(inputid2);
// console.log(inputid3);
// // 3
// const inputN1 = document.getElementsByName("firstname");
// console.log(inputN1);
// const inputN2 = document.getElementsByName("lastname");
// console.log(inputN2);
// // 4
// const input1 = document.getElementById("fname");
// const input2 = document.getElementById("lname");
// function getvalue(event) {
//     event.preventDefault();
//     const fname = input1.value;
//     const lname = input2.value;
//     const fli = document.createElement("li");
//     fli.innerText = fname;
//     const lli = document.createElement("li");
//     lli.innerText = lname;
//     const usersAnswers = document.querySelector(".usersAnswer");
//     usersAnswers.append(fli, lli);
//     input1.value = "";
//     input2.value = "";
// }

// /******** Exercise 3 ********/
// // 1
// let allBoltItems;
// // 2
// function getBoldItems() {
//     allBoltItems = document.getElementsByTagName("strong");
// }
// getBoldItems()
// console.log(allBoltItems)
// // 3
// function highlight() {
//     for (item of allBoltItems) {
//         item.style.color = "blue";
//     }
// }
// // 4
// function returnItemsToDefault() {
//     for (item of allBoltItems) {
//         item.style.color = "black";
//     }
// }
// // 5
// const p35 = document.querySelector("p");
// p35.addEventListener("mouseover", highlight);
// p35.addEventListener("mouseout", returnItemsToDefault);

/******** Exercise 4 ********/
// 1
