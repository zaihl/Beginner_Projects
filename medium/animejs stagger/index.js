
const colors = [
    "rgb(229, 57, 53)",
    "rgb(253, 216, 53)",
    "rgb(76, 175, 80)",
    "rgb(156, 39, 176)",
    "rgb(33, 150, 243)",
];

const wrapper = document.getElementById("tiles");
let rows = Math.floor(document.body.clientHeight / 50);
let columns = Math.floor(document.body.clientWidth / 50);

let toggled = false;

const handleOnClick = index => {
    toggled = !toggled;
    anime({
        targets: ".tile",
        opacity: toggled ? 0 : 1,
        delay: anime.stagger(50, {
            grid: [columns, rows],
            from: index
        })
    })
}

const createTile = index => {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.onclick = event => handleOnClick(index);
    return tile;
}

const createTiles = quantity => {
    for (let i = 0; i < quantity; i++) {
        wrapper.appendChild(createTile(i));
    }
}

createTiles(rows * columns);
wrapper.style.setProperty("--columns", columns);
wrapper.style.setProperty("--rows", rows);

const createGrid = () => {
    wrapper.innerHTML = "";

    rows = Math.floor(document.body.clientHeight / 50);
    columns = Math.floor(document.body.clientWidth / 50);

    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);

    createTiles(rows * columns);
}

window.onresize = () => createGrid();
