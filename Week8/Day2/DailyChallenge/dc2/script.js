const body = document.querySelector("body");
const nameInp = document.getElementById("name");
const lNameInp = document.getElementById("lastname");
const butt = document.getElementById("send");

butt.addEventListener('click', display);

function display(event) {
    event.preventDefault();
    const myObj = { "name": nameInp.value, "lastname": lNameInp.value }
    const myJSONString = JSON.stringify(myObj)
    const p = document.createElement("p");
    p.innerText = myJSONString;
    body.append(p)
}