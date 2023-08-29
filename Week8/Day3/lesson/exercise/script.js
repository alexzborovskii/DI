const btn = document.querySelector("#btn");
btn.addEventListener("click", getData)

function getData () {
    fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
        if (!response.ok) {
            throw new Error("problem with fetch")
        } else {
            return response.json()
        }
    })
    .then((data) => {
        const ulElement = document.querySelector("#results");
        // ulElement.innerText = "";
        if (ulElement.children[0]) {
            ulElement.children[0].remove();
        };
        const liElement = document.createElement("li");
        const text = document.createTextNode(`${data.value}`);
        liElement.appendChild(text);
        ulElement.appendChild(liElement)
    })
    .catch((error) => console.log("IN THE CATCH", error))
}