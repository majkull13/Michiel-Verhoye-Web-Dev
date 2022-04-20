let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
}
const setup = () => {
    let foto = document.getElementById("foto")
    timerId = setInterval(moveFoto, 1000)
}

const clickBomb = () => {
    alert("BATS JONGE, ge zi dood")
}
const moveFoto = () => {
    let foto = document.getElementById("foto")
    let playField = document.getElementById("playField")
    let random = Math.random() * 5


    foto.setAttribute("src", "images/" + Math.floor(random) + ".png");
    let maxLinks = playField.clientWidth - foto.offsetWidth;
    let maxHoogte = playField.clientHeight - foto.offsetHeight;

    let links = Math.floor(Math.random() * maxLinks);
    let hoogte = Math.floor(Math.random() * maxHoogte);

    foto.style.left = links + "px";
    foto.style.top = hoogte + "px";

}
window.addEventListener("load", setup);