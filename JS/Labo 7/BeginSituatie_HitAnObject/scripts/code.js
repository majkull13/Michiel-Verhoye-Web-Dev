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
    let img = document.getElementById("bomb")
    img.addEventListener("click", clickBomb)
}

const clickBomb = () => {
    alert("BATS JONGE, ge zi dood")
}


window.addEventListener("load", setup);


