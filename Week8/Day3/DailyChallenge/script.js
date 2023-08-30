const ulElement = document.querySelector("ul");
const delAllBtn = document.querySelector("#delAllBtn")
const inp = document.querySelector("#input");
const btn = document.querySelector("#btn");
btn.addEventListener("click", getData);
delAllBtn.addEventListener("click", () => { ulElement.textContent = "" })

async function getData() {
    try {
        let userInput = input.value;
        let apiUrl = `https://api.giphy.com/v1/gifs/random?tag=${userInput}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("problem with fetch")
        } else {
            let data = await response.json();
            let resData = data.data;
            displayGif(resData["images"]["480w_still"]["url"])
        }
    } catch (error) {
        console.log(error)
    }
}

function displayGif(link) {
    // gif
    const liElement = document.createElement("li");
    const gif = document.createElement("img");
    gif.src = link;
    liElement.appendChild(gif);
    // single delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "delete the gif";
    delBtn.addEventListener("click", (event) => {
        event.currentTarget.parentElement.remove();
    })
    // appending
    liElement.appendChild(delBtn);
    ulElement.appendChild(liElement);
} 
