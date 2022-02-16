const setup = () => {

    let familie = ['Bert', 'Katrien', 'Michiel', 'Elise', 'Brecht'];
    console.log(familie.length);
    console.log(familie[0]);
    console.log(familie[2]);
    console.log(familie[4]);

    const voegNaamToe = () =>{
        familie.push(prompt('geef ke nen naam'));
        console.log(familie);
    }
    voegNaamToe();

    console.log(familie.join(', '));
}
window.addEventListener("load", setup);

