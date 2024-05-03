const gridContainer = document.querySelector(".gridContainer");
const gridDimensionsBtn = document.getElementById("gridDimensionsBtn");

//Defualt Grid Dimensions
let gridDimensions = 16
gridContainer.style.gridTemplateRows = `repeat(${gridDimensions}, 1fr)`;
gridContainer.style.gridTemplateColumns = `repeat(${gridDimensions}, 1fr)`;

//Allow user to change dimensions
gridDimensionsBtn.addEventListener("click", () => {changeGridDimensions()})

function getGridDimensions() {
	userInput = prompt("Enter a number between 2-100", "16");
	gridDimensions = parseInt(userInput);

	return gridDimensions
}
function changeGridDimensions() {
getGridDimensions();
gridContainer.style.gridTemplateRows = `repeat(${gridDimensions}, 1fr)`;
gridContainer.style.gridTemplateColumns = `repeat(${gridDimensions}, 1fr)`;
}