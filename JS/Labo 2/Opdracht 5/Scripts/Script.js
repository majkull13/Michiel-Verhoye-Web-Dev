const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("click", setup2);
}
const setup2 = () =>{
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="welkom";
}
window.addEventListener("load", setup);