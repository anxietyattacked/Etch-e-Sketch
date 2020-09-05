//  Buttons and eventlisteners
const clear = document.getElementById("clear");
clear.addEventListener("click", cleared);
const newBtn = document.getElementById("new");
newBtn.addEventListener("click", newCanvas);
const container = document.getElementById("container");

// Funtions
function createDivs(size) {
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.className = "grid-item";
    div.addEventListener("mouseover", (e) =>
      e.target.classList.add("black-trail")
    );
    container.appendChild(div);
  }
}

function newCanvas() {
  container.innerHTML = "";
  let userPromt = prompt("How many squares per side?");
  size = userPromt;
  container.style.gridTemplateRows = `repeat(${size}, auto)`;
  container.style.gridTemplateColumns = `repeat(${size}, auto)`;
  createDivs(size);
}

function cleared() {
  const gridItems = document.querySelectorAll(".grid-item");
  for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].classList.remove("black-trail");
  }
}

createDivs(16);
