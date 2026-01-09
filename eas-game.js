const gameGrid = document.querySelector(".game-grid");

const gridMatrix = 12;

function generateGrid(gridSize) {

    // grid max length = 568px;
    // padding & gap = 4px;
    const gap = 4;
    const maxWidth = 568;
    const tileWidth = ( (maxWidth - (gridSize - 1) * gap) / gridSize );
    const gridTotalTiles = gridSize * gridSize;

    for(let i = 0; i < gridTotalTiles; i++) {
        const gridTile = document.createElement("div");
        gridTile.style.width = `${tileWidth}px`;
        gridTile.style.height = `${tileWidth}px`;
        gridTile.style.backgroundColor = "black";
        gridTile.style.borderRadius = "3px";
        //gridTile.setAttribute('style', `background-color: white; width: ${tileWidth}px; height:${tileWidth}px; border: 2px solid black; border-radius: 4px;`);
        gameGrid.appendChild(gridTile);
    };


};

generateGrid(gridMatrix);
