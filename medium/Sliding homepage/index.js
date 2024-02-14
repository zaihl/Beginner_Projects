const left = document.getElementById("left-side");

const handleOnMove = e => {
    const pos = e.clientX / window.innerWidth *100;
    left.style.width = `${pos}%`;
}

document.onmousemove = e => handleOnMove(e);

