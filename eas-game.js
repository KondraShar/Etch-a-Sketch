const gameGrid = document.querySelector(".game-grid");
const controlPanel = document.querySelector(".control-panel");
const gridMatrix = 16;
const penButton = document.querySelector(".pen-btn");
//const pencilButton = document.querySelector(".pencil-btn");
const chooseColorButton = document.querySelector(".choose-color-btn");
const randomColorButton = document.querySelector(".random-color-btn");
const dropDownMenu = document.querySelector(".dropdown-menu");
const colorIndicator = document.getElementById("color-indicator");
let penModeActive = true;
let pencilModeActive = false;
let chooseColorActive = true;
let randomColorActive = false;
let colorChoice = "black";
let randomChoice = generateRandomColor();
penButton.classList.add("buttonPressed");

function generateRandomColor() {
    const red = Math.floor( Math.random() * 256 );
    const green = Math.floor( Math.random() * 256 );
    const blue = Math.floor( Math.random() * 256 );
    return `rgb(${red},${green},${blue})`;
}
/*
function fadeColor(el, delta = -0.1) {     // negative = fade out, positive = fade in
    const c = getComputedStyle(el).backgroundColor;
    const nums = c.match(/[\d.]+/g)?.map(Number) ?? [0,0,0,1];
    
    let [r, g, b, a = 1] = nums;
    
    a = Math.max(0, Math.min(1, a + delta));
    el.style.backgroundColor = (a > 0.999 || a < 0.001)
        ? `rgb(${r}, ${g}, ${b})`
        : `rgba(${r}, ${g}, ${b}, ${Number(a.toFixed(3))})`;
}
*/
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
        gridTile.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
        gridTile.style.borderRadius = "3px";
        gameGrid.appendChild(gridTile);
    };
};
generateGrid(gridMatrix);

gameGrid.addEventListener('mousemove', (event) => {
   if (!event.target.classList.contains("tile")) {
        return;
    }
    if ( penModeActive == true ) {
        if ( chooseColorActive == true) {
            event.target.style.backgroundColor = colorChoice;
        }
        if ( randomColorActive == true ) {
            event.target.style.backgroundColor = generateRandomColor();
        }
    }
    /*if ( pencilModeActive == true ) {
        if ( chooseColorActive == true) {
            
            fadeColor(event.target);
            
        }

        if ( randomColorActive == true ) {
            event.target.style.backgroundColor = generateRandomColor();
        }
    }*/
});

controlPanel.addEventListener('click', (event) => {
    if ( !event.target.classList.contains("btn") ) {
        return;
    }
    // ##################   TOOLS   ####################
    if ( event.target.classList.contains("pen-btn")) {
        penButton.classList.add("buttonPressed");
        //pencilButton.classList.remove("buttonPressed");
        penModeActive = true;
        pencilModeActive = false;
    }
    /*if ( event.target.classList.contains("pencil-btn")) {
        pencilButton.classList.add("buttonPressed");
        penButton.classList.remove("buttonPressed");
        pencilModeActive = true;
        penModeActive = false;
    }*/
    // #################   COLORS   ####################
    if ( event.target.classList.contains("choose-color-btn")) {
        if ( dropDownMenu.style.visibility == "visible" ) {
            dropDownMenu.style.visibility = "hidden";
        } else {
            dropDownMenu.style.visibility = "visible";
        }
        chooseColorActive = true;
        randomColorActive = false;
    }
    if ( event.target.classList.contains("colorSel") ) {
        colorChoice = event.target.textContent;
        dropDownMenu.style.visibility = "hidden";
        colorIndicator.style.background = colorChoice;
    }
    if ( event.target.classList.contains("random-color-btn")) {
        randomColorActive = true;
        chooseColorActive = false;
        colorIndicator.style.background = "linear-gradient(45deg, #ff0000, #ff9900, #33ff00, #00ffff, #3366ff, #cc00ff, #ff0000)";
    }
    // ##############   CHANGE GRID   ##################
    if ( event.target.classList.contains("grid-size-btn") ) {
        

        let choosenGridSize = prompt("---Grid Size---\n\n from 1 to 100\n\nEnter:");

        if ( choosenGridSize && (choosenGridSize > 100 || choosenGridSize < 1) ) {
            alert("---New Message---\n\nMy dear friend,\n\nplease read the instructions carefully...\nYou may enter numbers from 1 to 100 only!\nEasy, right?:)\n\nSincerly\nMr. Annoying Message");
        } else {
            while (gameGrid.hasChildNodes()) {
                gameGrid.removeChild(gameGrid.firstChild);
            }
            generateGrid(choosenGridSize);
        }
    }
});