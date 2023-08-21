const animate = document.getElementById("animate");
const container = document.getElementById("container");

let position = 0;

function myMove() {
    const intervalId = setInterval(() => {
        if (position <= (container.clientWidth - animate.clientWidth)) {
            position++;
            animate.style.left = position + "px";
        } else {
            clearInterval(intervalId);
            setTimeout(() => { position = 0; animate.style.left = position + "px"; }, 500);
        }
    }, 1)
}


