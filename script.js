function randomColor(){
  const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return {r, g, b};
}

function createGrid(size) {
  const grid = document.querySelector('#grid'); 
  grid.innerHTML = '';
  const cellSize = 600 / size;

  for (let i = 1; i <= size*size; i++){
    const cell = document.createElement('div');
    cell.classList.add("cell");
    cell.style.cssText = `height: ${cellSize}px; width: ${cellSize}px`;
    cell.addEventListener("mouseenter", () => {
      if (clicked === 'blackBtn'){
        cell.style.backgroundColor = "black";
      }
      else if (clicked === 'rainbow') {
        const {r,g,b} = randomColor();
        cell.style.backgroundColor = `rgb(${r},${g},${b})`;
      }
    });
    grid.appendChild(cell);
  }
}

let numOfSquares;
function squares(){
  numOfSquares = document.querySelector("#number").value;
  console.log(numOfSquares);
  createGrid(numOfSquares); 
}

let clicked = 'rainbow';
document.querySelector('.black').addEventListener("click", () => {
  clicked = 'blackBtn';
})

document.querySelector('.reset').addEventListener("click", () => {
  clicked = 'rainbow';
  createGrid(16);
})

createGrid(16);
