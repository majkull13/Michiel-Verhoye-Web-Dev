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
    let button = document.getElementsByTagName("button")[0];
    button.addEventListener("click", startGame);
    let foto = document.getElementById("foto")
    foto.addEventListener("click", aantalHits)
}

const startGame = () => {
    timerId=setInterval(moveFoto, 3000)
    let button = document.getElementsByTagName("button")[0];
    button.style.display = 'none'
}

const aantalHits = () => {
    let hits = document.getElementsByTagName("span")[0];

    let foto = document.getElementById("foto");
    if (foto.getAttribute("src") == "images/0.png")
    {
        clearInterval(timerId);
        alert("GAME OVER");
    }
    else
    {
        hits.innerHTML ++;
    }

}

const moveFoto = () => {
    // Deze function wordt opgeroepen telkens de gebruiker
    // op het speelveld klikt.
    let foto=document.getElementById("foto");
    let getal = Math.floor( Math.random() * 5);
    foto.setAttribute("src", "images/"+ getal +".png")
    let speelveld=document.getElementById("playField");
    let maxLeft=speelveld.clientWidth - foto.offsetWidth;
    let maxHeight=speelveld.clientHeight - foto.offsetHeight;

    // verplaats de foto
    let left=Math.floor(Math.random()*maxLeft);
    let top=Math.floor(Math.random()*maxHeight);
    foto.style.left=left+"px";
    foto.style.top=top+"px";
}



window.addEventListener("load", setup);