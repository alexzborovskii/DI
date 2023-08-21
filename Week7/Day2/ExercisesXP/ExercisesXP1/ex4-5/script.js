// /******** Exercise 4 ********/
// const input1 = document.getElementById("radius");
// const input2 = document.getElementById("volume");

// function getvalue(event) {
//     event.preventDefault();
//     const radius = input1.value;
//     let calcVol = 4 / 3 * 3.14 * radius;
//     input2.value = calcVol;
// }

// /******** Exercise 5 ********/
// let fromleft = 0;
// let fromtop = 300;
// const square = document.getElementById("square");
// square.addEventListener("click", () => {
//     fromleft += 10;
//     square.style.left = fromleft + "px";
// })

// square.addEventListener("mouseover", () => {
//     fromtop += 10;
//     square.style.top = fromtop + "px";
// })

// square.addEventListener("mouseout", () => {
//     fromtop -= 10;
//     square.style.top = fromtop + "px";
// })

// square.addEventListener("dblclick", () => {
//     function getRandomColor() {
//         const letters = "0123456789ABCDEF";
//         let color = "#";
//         for (let i = 0; i < 6; i++) {
//           color += letters[Math.floor(Math.random() * 16)];
//         }
//         return color;
//       }
    
//     square.style.background = getRandomColor();
// })