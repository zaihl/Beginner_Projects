const images = document.getElementsByClassName("image");

let index = 0;
let last = {x:0, y:0};
const activate = (image, x, y) => {
    image.style.left = `${x}px`;
    image.style.top = `${y}px`;
    image.style.zIndex = index;

    image.dataset.status = "active";

    last = {x, y};
}

const distanceFromLast = (x, y) => {
    return Math.hypot(x - last.x, y - last.y);
}

window.onmousemove = e => {
    if (distanceFromLast(e.clientX, e.clientY) > 100)
    { 
        const leadingImage = images[index%images.length];
        const tailImage = images[(index-5)%images.length];

        activate(leadingImage, e.clientX, e.clientY);
        if (tailImage) tailImage.dataset.status = "inactive";
        index++;
    }
}