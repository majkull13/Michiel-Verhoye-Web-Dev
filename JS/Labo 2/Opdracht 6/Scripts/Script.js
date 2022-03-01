const setup = () =>{
    let buttonKopieer = document.getElementById('buttonKopier');
    buttonKopieer.addEventListener('click', kopieer);
}

const kopieer = () => {
    let textInput = document.getElementById('textInput')
    let tekst = textInput.value;
    let textOutput = document.getElementById('textOutput');

    textOutput.innerHTML = tekst;
}
window.addEventListener('load', setup);