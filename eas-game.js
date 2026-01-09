const gameGrid = document.querySelector(".game-grid");
const controlPanel = document.querySelector(".control-panel");
const gridMatrix = 16;

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