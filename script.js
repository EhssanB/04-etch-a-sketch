let gridContainer = document.createElement("div");
gridContainer.classList.add("gridContainer");

let gridCreator = (gridLength, gridContainer) => {
    let totalGrids = gridLength * gridLength;
    
    for (let i = 0; i < totalGrids; i++) {
        let gridBox = document.createElement("div");
        gridBox.classList.add("gridBox");
        gridContainer.append(gridBox);
    }
}

gridCreator(16, gridContainer);

document.querySelector("body").append(gridContainer);