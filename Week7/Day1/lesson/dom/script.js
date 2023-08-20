//DOM selecting

// const myHeader = document.querySelector("h1");
// console.log(myHeader.innerText);
// myHeader.innerText = "WELCOME TO MY PAGE!!! SO EXCITED TP HAVE YOU :D";

// //
// const myList = document.querySelector("ul");
// console.log(myList.firstElementChild);
// myList.firstElementChild.innerText = "BANANA";

// console.log(myList);
// console.log(myList.parentElement);


// const myP = document.querySelector('#secondP');
// console.log(myP.textContent);


// const myP = document.getElementById("secondP")
// console.log(myP.textContent);


// const myh2 = document.querySelector('.red');
// console.log(myh2.textContent);



// const myDivs = document.querySelector("div");
// console.log(myDivs.innerText);
// console.log(myDivs.innerHTML)


// const myDiv = document.querySelector("div");
// const newHeader = document.createElement("h2");
// // const header = document.querySelector("#h1")
// // const headerText = document.createTextNode("This is a new header");


// // newHeader.append(headerText);

// newHeader.innerText = "This is a one more new header";
// myDiv.append(newHeader)


// newHeader.style.backgroundColor = "pink";
// myDiv.style.width = "100px";


// // attributes
// const header = document.getElementById("firstHeader");
// console.log(header.hasAttribute("id"));


// console.log(header.getAttribute("id"));

// console.log(header.id)


// header.setAttribute("style", "color:yellow");
// header.style.color = "pink";

// header.className = "four five";
// header.classList.add("secondBanana", "thirdBanana", "red", "border");
// console.log(header.className);

// console.log(header.classList.contains("red"));

// text = document.getElementById("text");
// text.style.backgroundColor = "purple";
// text.style.color = "blue";
// // console.log(text.innerText);



////////////// FORMS /////////////////

// const form1 = document.querySelector("form");
// console.log(form1)

// const forms = document.forms;
// // console.log(forms[0]);
// // console.log(forms[1]);
// // console.log(forms.my);
// console.log(forms.yours); // form.name
// console.log(forms.yours.elements);
// console.log(forms.yours.elements.one);
// console.log(myInput.value);


const toDoList = document.getElementById("toDoList");
const myInput = document.getElementById("one");
// console.log(myInput.value);
// console.log(toDoList);

function addToToDoList () {
    // e.preventDefault();
    if (myInput.value.length < 1){
        alert("please fill a task")
    }else{
        const newLi = document.createElement("li");
        newLi.innerText = myInput.value;
        toDoList.append(newLi);
        myInput.value = "";

    }
}




const mySelect = document.querySelector("#select");
mySelect.selectedIndex = 1;


function selected() {
    console.log(mySelect.value);
}


