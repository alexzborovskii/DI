// const btn = document.querySelector("#btn");
// btn.addEventListener("click", getData);


fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        if (!response.ok) {
            throw new Error("problem with fetching")
        } else {
            return response.json()
        }
    })
    .then((data) => {
        const ulElement = document.querySelector("#results")
       data.forEach(user => {
           const liElement = document.createElement("li");
           const text = document.createTextNode(`${user["name"]} - ${user["email"]}`);
           liElement.appendChild(text);
           ulElement.appendChild(liElement)
            
        });
    })
    .catch((error) => console.log(error))

