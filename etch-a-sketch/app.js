const grid = document.querySelector(".container__grid");
const range = document.querySelector("#range");
const gridSize = document.querySelector("#grid-size");
const div = document.querySelector("div");

function generateGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("sample");
    grid.appendChild(gridElement);
  }
}

// range.onmousemove = (e) => updateGridSize(e);

// function updateGridSize(size) {
//   gridSize.innerHTML = size.target.value;
// }

// range.addEventListener("change", function () {
//   generateGrid(this.value);
// });

generateGrid(5);

div.addEventListener("mousedown", function () {
  console.log("hold");
});
