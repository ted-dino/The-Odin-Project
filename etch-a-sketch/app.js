console.clear();

const squares = document.querySelector(".canvas");
const resetCanvas = document.querySelector(".resetCanvas");

function setGrid(size) {
  squares.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  squares.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-element");
    gridElement.addEventListener("mouseover", draw);
    squares.appendChild(gridElement);
  }
}

function draw(element) {
  element.target.style.backgroundColor = "#fff";
}

function resetGrid() {
  const promptText = prompt(
    "Please input your desired size of grid. (1 - 100)\n 16x16 is set when textbox is blank."
  );

  squares.innerHTML = "";
  if (promptText) {
    setGrid(promptText);
  } else {
    setGrid(16);
  }
}

resetCanvas.addEventListener("click", resetGrid);

setGrid(16);
