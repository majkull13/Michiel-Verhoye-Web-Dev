const setup = () => {
    button1 = document.getElementById("spatieButton")
    button1.addEventListener("click", spaties)

}

const spaties = () => {
    let tekst = document.getElementById("tekstId").value;
    let tekst2 = tekst.replaceAll(' ','');
    let result = tekst2.split('').join(' ');
    console.log(result);
}
window.addEventListener("load", setup);