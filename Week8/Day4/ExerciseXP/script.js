const infoBox = document.getElementById("info-box");
const btn = document.getElementById("btn");
let lastID = 0;
btn.addEventListener('click', getData)



function getLink() {
    let randId = -1;
    do {
        randId = Math.floor(Math.random() * 83);
    } while (randId == lastID);
    // randId = 17;
    // console.log(randId);
    const urlBase = "https://www.swapi.tech/api/people/";
    let url = `${urlBase}${randId}`;
    return url
}

async function getData() {
    loader();
    try {
        const url = getLink();
        const response = await fetch(url);
        if (!response.ok) {
            displayPersonError()
        } else {
            let data = await response.json();
            const resData = data["result"]["properties"];
            displayPerson(resData);
        }
    } catch (error) {
        console.log(error)
    }
}

async function displayPerson(data) {
    const name = document.createElement("p");
    name.id = "name";
    const height = document.createElement("p");
    height.id = "height";
    const gender = document.createElement("p");
    gender.id = "gender";
    const by = document.createElement("p");
    by.id = "by";
    const world = document.createElement("p");
    world.id = "world";
    name.innerText = data["name"]
    height.innerText = `Height: ${data["height"]}`
    gender.innerText = `Gender: ${data["gender"]}`
    by.innerText = `Birth Year: ${data["birth_year"]}`
    //getting the planet
    const planetName = await getPlanet(data);
    world.innerText = `Home World: ${planetName.result.properties.name}`;
    // appending
    infoBox.innerText = '';
    infoBox.append(name, height, gender, by, world);
}


async function getPlanet(data) {

    try {
        const response = await fetch(data["homeworld"]);

        if (!response.ok) {
            throw new Error("problem with fetch planet")
        } else {
            let planetData = await response.json();
            return planetData
        }
    } catch (error) {
        console.log(error)
    }
}


function loader() {
    infoBox.innerText = "";
    const loaderIcon = document.createElement("p");
    loaderIcon.id = "loader-icon";
    loaderIcon.innerHTML = '<i class="fa-solid fa-spinner fa-spin-pulse"></i>';
    infoBox.append(loaderIcon);
}

function displayPersonError() {
    infoBox.innerHTML = "";
    const err = document.createElement("p");
    err.innerText = "Cant find this person";
    err.id = "error"
    infoBox.append(err)
}