let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");
    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    let invalid = document.getElementsByClassName("invalid");
    if(invalid.length === 0) {
        let option = document.createElement("option")
        let persoon = {
            voornaam: document.getElementById("txtVoornaam").value,
            familienaam: document.getElementById("txtFamilienaam").value,
            geboortedatum: document.getElementById("txtGeboorteDatum").value,
            email: document.getElementById("txtEmail").value,
            kinderen: document.getElementById("txtAantalKinderen").value
        }
        let lijst = document.getElementById("lstPersonen");
        let index = lijst.selectedIndex;

        if(index != -1)
        {
            option.value = persoon.voornaam + persoon.familienaam
            option.innerHTML = persoon.voornaam + " " + persoon.familienaam
            let list = document.getElementById("lstPersonen")
            list.options[index] = option;
            personen[index] = persoon;
        }
        else{
            option.value = persoon.voornaam + persoon.familienaam
            option.innerHTML = persoon.voornaam + " " + persoon.familienaam
            let list = document.getElementById("lstPersonen")
            list.appendChild(option);
            personen.push(persoon);
        }
        lijst.selectedIndex = index;

    }
    // indien ok, bewaar de ingegeven data.
    // een nieuw aangemaakte persoon voegen we toe
    // een bestaande persoon in de lijst passen we aan
    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};
const selecteerPersoon = () => {
    let lijst = document.getElementById("lstPersonen")
    let index = lijst.selectedIndex
    let persoon = personen[index]
    let voornaam = document.getElementById("txtVoornaam")
    voornaam.value = persoon.voornaam;
    let familienaam = document.getElementById("txtFamilienaam")
    familienaam.value = persoon.familienaam;
    let geboortedatum = document.getElementById("txtGeboorteDatum")
    geboortedatum.value = persoon.geboortedatum;
    let email = document.getElementById("txtEmail")
    email.value = persoon.email;
    let kinderen = document.getElementById("txtAantalKinderen")
    kinderen.value = persoon.kinderen;
}

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    let voornaam = document.getElementById("txtVoornaam");
    voornaam.value = "";
    let familienaam = document.getElementById("txtFamilienaam")
    familienaam.value = "";
    let geboortedatum = document.getElementById("txtGeboorteDatum")
    geboortedatum.value = "";
    let email = document.getElementById("txtEmail")
    email.value = "";
    let kinderen = document.getElementById("txtAantalKinderen")
    kinderen.value = "";
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");

    let option = document.getElementById("lstPersonen")
    option.addEventListener("click", selecteerPersoon)

    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);