const gridContainer = document.querySelector(".gridContainer");
const gridDimensionsBtn = document.getElementById("gridDimensionsBtn");
let gridDimensions = 16;
function setGridDimensions(gridDimensions) {
	for(let i = 0; i < gridDimensions; i++){
		let gridColumn = document.createElement("div");
		gridColumn.setAttribute("class", "gridItemColumn");
			for (let j = 1; j <= gridDimensions; j++){
				let gridRow = document.createElement("div");
				gridRow.setAttribute("class", "gridItemRow");
				gridColumn.appendChild(gridRow);
			}
		gridContainer.appendChild(gridColumn);
	}
}
function askUserInput() {
	askUserInput = prompt("Input a number between 2-100", "16");
	gridDimensions = parseInt(askUserInput);

	setGridDimensions(gridDimensions);
}
gridDimensionsBtn.addEventListener("click", () => {askUserInput()} )