let swatches = [];

const storeSliderValues = (red, green, blue) => {
    localStorage.setItem("red", red)
    localStorage.setItem("green", green);
    localStorage.setItem("blue", blue);
};

const restoreSliderValues = () => {
    document.getElementById("sldRed").value = localStorage.getItem("red");
    document.getElementById("sldGreen").value = localStorage.getItem("greed");
    document.getElementById("sldBlue").value = localStorage.getItem("blue");

};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    for (let i = 0; i < document.getElementsByTagName(swatches).length; i++) {
        
    }
};

const restoreSwatches = () => {

};
