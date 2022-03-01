let familie = ["Michiel", "Elise", "Bert", "Katrien", "Nog iemand"];

console.log(`3e Element: ${familie[2]}\n5e Element: ${familie[4]}`);

const voegNaamToe = (naam) => {
    familie.push(naam)
}

voegNaamToe(window.prompt("Geef een naam"));

console.log(familie);
console.log(familie.toString());