//Container
const container = document.querySelector("container");
//Grids
function createGrids(noOfGrids) {
	for (let i = 0; i < noOfGrids; i++) {
		container.appendChild(document.createElement("div"));
	}
}