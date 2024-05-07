const gridContainer = document.querySelector(".gridContainer");
const gridDimensionsBtn = document.getElementById("gridDimensionsBtn");
let gridDimensions = 16;

function setGridDimensions(gridDimensions) {
	//gridColoumn
	for(let i = 0; i < gridDimensions; i++){
		let gridColumn = document.createElement("div");
		gridColumn.setAttribute("class", "gridItem gridItemColumn");
	//gridRow
			for (let j = 0; j < gridDimensions; j++){
				let gridRow = document.createElement("div");
				gridRow.setAttribute("class", "gridItem gridItemRow");
				//change color on hover
				gridRow.addEventListener("mouseover", () => {
					gridRow.style.backgroundColor = "black";
				})
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
function changeDivColor () {
	touc
}
gridDimensionsBtn.addEventListener("click", () => {askUserInput()} )
setGridDimensions(16);
