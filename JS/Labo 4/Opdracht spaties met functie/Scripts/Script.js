const setup = () => {
    button1 = document.getElementById("spatieButton")
    button1.addEventListener("click", spaties)

}

const spaties = () => {
    let tekst = document.getElementById("tekstId").value;
    console.log(maakMetSpaties(tekst));

}

const maakMetSpaties = (inputText) => {
    let tekst2 = inputText.replaceAll(' ','');
    let result = tekst2.split('').join(' ');
    return result;
}
window.addEventListener("load", setup);
