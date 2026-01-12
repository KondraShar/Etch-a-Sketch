const gameGrid = document.querySelector(".game-grid");
const controlPanel = document.querySelector(".control-panel");
const gridMatrix = 16;

const penButton = document.querySelector(".pen-btn");
const pencilButton = document.querySelector(".pencil-btn");
const chooseColorButton = document.querySelector(".choose-color-btn");
const randomColorButton = document.querySelector(".random-color-btn");

let penModeActive = true;
let pencilModeActive = false;
let chooseColorActive = false;
let randomColorActive = false;

penButton.classList.add("buttonPressed");
chooseColorButton.classList.add("buttonPressed");

function generateGrid(gridSize) {
    // grid max length = 568px;
    // padding & gap = 4px;
    const gap = 1;
    const maxWidth = 518;
    const tileWidth = ( (maxWidth - (gridSize - 1) * gap) / gridSize );
    const gridTotalTiles = gridSize * gridSize;

    for(let i = 0; i < gridTotalTiles; i++) {
        const gridTile = document.createElement("div");
        gridTile.classList = "tile";
        gridTile.style.width = `${tileWidth}px`;
        gridTile.style.height = `${tileWidth}px`;
        gridTile.style.backgroundColor = "white";
        gridTile.style.borderRadius = "3px";
        //gridTile.setAttribute('style', `background-color: white; width: ${tileWidth}px; height:${tileWidth}px; border: 2px solid black; border-radius: 4px;`);
        gameGrid.appendChild(gridTile);
    };
};

generateGrid(gridMatrix);

gameGrid.addEventListener('mousemove', (event) => {
   if (!event.target.classList.contains("tile")) {
        return;
    }
    event.target.style.backgroundColor = "black";
});

controlPanel.addEventListener('click', (event) => {
    if ( !event.target.classList.contains("btn") ) {
        return;
    }

    // ##################   TOOLS   ####################
    if ( event.target.classList.contains("pen-btn")) {
        penButton.classList.add("buttonPressed");
        pencilButton.classList.remove("buttonPressed");
    }
    if ( event.target.classList.contains("pencil-btn")) {
        pencilButton.classList.add("buttonPressed");
        penButton.classList.remove("buttonPressed");
    }

    // #################   COLORS   ####################
    if ( event.target.classList.contains("choose-color-btn")) {
        chooseColorButton.classList.add("buttonPressed");
        randomColorButton.classList.remove("buttonPressed");
    }
    if ( event.target.classList.contains("random-color-btn")) {
        randomColorButton.classList.add("buttonPressed");
        chooseColorButton.classList.remove("buttonPressed");
    }

    // ##############   CHANGE GRID   ##################
    if ( event.target.classList.contains("grid-size-btn") ) {
        let choosenGridSize = prompt("---Grid Size---\n\n from 1 to 100\n\nEnter:");

        if (choosenGridSize > 100 || choosenGridSize < 1) {
            alert("---New Message---\n\nMy dear friend,\n\nplease read the instructions carefully...\nYou may enter numbers from 1 to 100 only!\nEasy, right?:)\n\nSincerly\nMr. Annoying Message");
        } else {
            while (gameGrid.hasChildNodes()) {
                gameGrid.removeChild(gameGrid.firstChild);
            }
            generateGrid(choosenGridSize);
        }
    }

    
});