const setup = () =>{
    let btn = document.createElement("button");
    btn.innerHTML = "click me";
    document.body.appendChild(btn);
    btn.addEventListener("click", clickbutton)
}
const clickbutton = () => {
    let tag = document.createElement("p");
    tag.innerHTML = "Fuck Gilles, all my homies hate Gilles";
    let element = document.getElementById("myDIV");
    element.appendChild(tag);
}
window.addEventListener("load", setup)