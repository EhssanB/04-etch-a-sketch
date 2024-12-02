// DOM Elements

let body = document.querySelector("body");

let main = document.createElement("div");
main.classList.add("main");

let gridContainer = document.createElement("div");
gridContainer.classList.add("gridContainer");

main.append(gridContainer);
body.append(main);

let gridValue = document.querySelector(".gridValue");

// Event Listener Functions

// Function to create grid
let gridCreator = (gridLength, gridContainer) => {
    let totalGrids = gridLength * gridLength;
    
    for (let i = 0; i < totalGrids; i++) {
        let gridBox = document.createElement("div");
        gridBox.classList.add("gridBox");
        gridBox.setAttribute("draggable", false);
        //gridBox.textContent = `${i+1}`;
        gridBox.addEventListener("mouseover", colorBox);
        gridBox.addEventListener("mousedown", colorBox);
        gridContainer.append(gridBox);
    }
}

// Function to colour grid boxes
let colorBox = e => {
    if (e.buttons == 1 || e.type == "click") {
        e.target.classList.add("active");
    };
}

// UI - user options

let root = document.querySelector(":root");

let gridSizeInput = document.querySelector("#gridLength");

let setGridLength = e => {
    let gridWidth = window.getComputedStyle(root).getPropertyValue("--grid-width");
    let inputValue = e.target.valueAsNumber;
    gridValue.textContent = inputValue;

    let gridBoxSize = `${((parseInt(gridWidth)/inputValue))}px`;
    console.log(`gridWidth: ${gridWidth}, inputValue (Number of boxes): ${inputValue}, gridBoxSize: ${gridBoxSize}`);
    
    root.style.setProperty("--grid-box", gridBoxSize);
    
    document.querySelector(".gridContainer").remove();

    let newGrid = document.createElement("div");
    newGrid.classList.add("gridContainer");
    gridCreator(inputValue, newGrid);
    main.append(newGrid);

}



gridSizeInput.addEventListener("change", setGridLength)

// Initial State 

gridCreator(16, gridContainer);