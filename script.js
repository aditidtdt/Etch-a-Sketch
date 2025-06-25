let color = '#';
function randomColor(){
  let letters = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    color += letters[(Math.floor(Math.random() * 16))];
  }
  return color;
}

let cell;
function createGrid(size) {
  const grid = document.querySelector('#grid'); 
  grid.innerHTML = '';
  const cellSize = 600 / size;

  for (let i = 1; i <= size*size; i++){
    cell = document.createElement('div');
    cell.classList.add("cell");
    grid.appendChild(cell);
    cell.style.cssText = `height: ${cellSize}px; width: ${cellSize}px`;
  }
}

createGrid(16);

let numOfSquares;
function squares(){
  numOfSquares = document.querySelector("#number").value;
  console.log(numOfSquares);
  createGrid(numOfSquares);
}

function clear() {
  grid.innerHTML = "";
}