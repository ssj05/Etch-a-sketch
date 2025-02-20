const body = document.querySelector("body");
const view = document.querySelector("#view");
let grids = 16;

const getGridButton = document.querySelector("button");
getGridButton.addEventListener("click", () => {
  grids = parseInt(prompt("Box size: ", "16"));
  removeBox();
  createBox(grids);
});

body.insertBefore(getGridButton, view);

createBox(grids);

function createBox(n) {
  for (let i = 0; i < n; i++) {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.flexDirection = "column";
    row.style.flex = "1 auto";
    row.classList.add("row");
    for (let j = 0; j < n; j++) {
      const square = document.createElement("div");
      // square.style.width = "20px";
      // square.style.height = "20px";
      square.style.display = "flex";
      square.style.flex = "1 auto";
      // square.style.border = "2px solid red";
      square.classList.add("square");
      row.appendChild(square);
    }
    view.appendChild(row);
  }
  addEvent();
}

function addEvent() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((box) => {
    box.addEventListener("mouseenter", () => {
      box.style.backgroundColor = "black";
    });
  });
}

function removeBox() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((box) => {
    box.remove();
  });

  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    row.remove();
  });
}
