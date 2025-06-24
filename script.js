let numOfSquares;
function squares(){
  numOfSquares = document.querySelector("#number").value;
}

const grid = document.querySelector('#grid'); 
for (let i = 1; i <= numOfSquares; i++){
  const cell = document.createElement('div');
  cell.className = 'grid-cell';
  grid.appendChild(cell);
}
