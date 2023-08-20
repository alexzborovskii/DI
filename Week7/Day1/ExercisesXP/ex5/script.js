
// 2
const firstDiv = document.querySelector("div");
console.log(firstDiv.innerText);

const uLists = document.querySelectorAll("ul");
const firstUList = uLists[0];
const lEls = firstUList.querySelectorAll("li");
lEls[1].innerText = "Richard";
let secondUList = uLists[1];
let secondUListLI = secondUList.querySelectorAll("li");
secondUListLI[1].remove()

for (let ul of uLists) {
    ul.querySelectorAll("li")[0].innerText = "Alex";
}

// 3
for (let ul of uLists) {
    ul.classList.add('student_list');
}
uLists[0].classList.add('university', 'attendance');

// 4
        //1
firstDiv.style.backgroundColor = "lightblue";
firstDiv.style.padding = "10px";
        //2
for (let uList of uLists){
    for (let li of uList.querySelectorAll("li")){
        if (li.innerText == "Dan"){
            li.style.display = "none";
        }
    }
}
        //3
for (let uList of uLists){
    for (let li of uList.querySelectorAll("li")){
        if (li.innerText == "Richard"){
            li.style.border = "2px solid red";
        }
    }
}
        //4
indexBody = document.querySelector("body");
indexBody.style.backgroundColor = "pink";

// // 5
// users = "";
// if (firstDiv.style.backgroundColor == "lightblue") {
//     for (user of firstUList.querySelectorAll("li")) {
//         if (users == "") {
//             users += `${user.innerText}`;
//         } else {
//             users += ` and ${user.innerText}`
//         }
//     }
//     alert(`Hello ${users}`)
// }


