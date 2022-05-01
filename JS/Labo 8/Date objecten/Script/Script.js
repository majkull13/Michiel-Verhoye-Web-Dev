const setup = () => {
    let dag = 24*60*60*1000;
    let verjaardag = new Date(2003, 9, 13);
    let datum = new Date();
    let verschil = Math.round((datum.getTime() - verjaardag.getTime())/(dag));
    alert(verschil)
}
window.addEventListener("load", setup)