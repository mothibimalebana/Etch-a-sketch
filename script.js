//Container
const gridContainer = document.querySelector(".gridContainer");
//Grids
function createGrids(noOfGrids) {
	for (let i = 0; i < noOfGrids; i++) {
		gridContainer.appendChild(document.createElement("div"))
	}
}