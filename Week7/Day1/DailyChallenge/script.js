const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupoter", "Saturn", "Uranus", "Neptune"];
const colors = [];

for (let i = 0; i < planets.length; i++) {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    colors.push(randomColor);
}

let color_number = 0

for (let planet of planets) {
    const newDiv = document.createElement("div");
    newDiv.innerText = planet;
    newDiv.className = "planet";
    newDiv.style.height = "100px";
    let planetColor = colors[color_number];
    color_number++;
    newDiv.style.backgroundColor = planetColor;
    const firstSection = document.querySelector("section");
    firstSection.appendChild(newDiv);
}