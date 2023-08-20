// 2
firstDiv = document.querySelector("div");
firstDiv.setAttribute("id", "socialNetworkNavigation");

// 3
            //1
newLi = document.createElement("li");
            //2
textNode = document.createTextNode("Logout");
            //3
newLi.append(textNode);
            //4
firstUl = document.querySelector("div > ul");
firstUl.appendChild(newLi);


// 4
console.log(firstUl.firstElementChild.innerText);
console.log(firstUl.lastElementChild.textContent);
