
function setColor() {
    const colors = ["blue", "red", "green", "yellow", "purple", "orange"];
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function applyColors() {
    let squares = document.querySelectorAll(".square");
    squares.forEach((g) => g.style.backgroundColor = setColor());
    return "app";
}

var id;

function stop() {
    clearInterval(id);
}

document.querySelector(".start").addEventListener("click", () => {
    var id = setInterval(applyColors, 1000);
});

document.querySelector(".stop").addEventListener("click", stop);