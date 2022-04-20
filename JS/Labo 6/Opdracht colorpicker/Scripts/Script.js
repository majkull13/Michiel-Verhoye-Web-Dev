const update = () => {
    let slider1 = document.getElementById("slider1");
    let slider2 = document.getElementById("slider2");
    let slider3 = document.getElementById("slider3");

    let value1 = slider1.value;
    let value2 = slider2.value;
    let value3 = slider3.value;

    let background = document.getElementsByClassName("swatch");
    background[0].style.backgroundColor = "rgb(" + value1 + ", " + value2 + ", " + value3 + ")";

    console.log(value1)
}
const click = () => {
    let swatch = document.createElement("div");
    swatch.classList.add("swatch");
    let background = document.getElementsByClassName("swatch")[0];
    swatch.style.backgroundColor = background.style.backgroundColor;
    document.body.appendChild(swatch);

    const verwijderButton = document.createElement("button");
    swatch.appendChild(verwijderButton);

    const verwijderButtonText = document.createTextNode("X");
    verwijderButton.appendChild(verwijderButtonText);

    swatch.addEventListener("click", reverse)
    verwijderButton.addEventListener("click", verwijderen);
}
const verwijderen =(event) => {
    event.currentTarget;
    event.target.parentNode.remove();
    console.log(event.target);

}


const reverse = (event) => {
    let rgb = event.target.style.backgroundColor;
    console.log(rgb);
    let rgb1 = rgb.slice(4, rgb.indexOf(",",1))
    let rgb2 = rgb.slice(rgb.indexOf(",")+2, rgb.indexOf(",", rgb.indexOf(",")+1));
    let rgb3 = rgb.slice(rgb.indexOf(",", rgb.indexOf(",")+1)+2, rgb.length-1);
    let slider1 = document.getElementById("slider1");
    let slider2 = document.getElementById("slider2");
    let slider3 = document.getElementById("slider3");
    slider1.value = rgb1;
    slider2.value = rgb2;
    slider3.value = rgb3;
    update();
}

const setup = () => {
    let slider1 = document.getElementById("slider1");
    let slider2 = document.getElementById("slider2");
    let slider3 = document.getElementById("slider3");
    slider1.addEventListener("change", update)
    slider2.addEventListener("change", update)
    slider3.addEventListener("change", update)
    let button = document.getElementsByTagName("button")[0];
    button.addEventListener("click", click)
}
window.addEventListener("load", setup)