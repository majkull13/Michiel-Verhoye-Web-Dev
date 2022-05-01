const setup = () => {
    let student={
        voornaam : "Jan",
        familienaam : "Janssens",
        geboorteDatum : new Date("1993‐12‐31"),
        adres : { // een object
            straat : "Kerkstraat 13",
            postcode : "8500",
            gemeente : "Kortrijk"
        },
        isIngeschreven : true,
        namenVanExen : ["Sofie", "Berta", "Philip", "Albertoooo"], // een array
        aantalAutos : 2
    }

    console.log(JSON.stringify(student))
}

const setup2 = () => {
    let tekst = '{"voornaam":"Jan","familienaam":"Janssens","geboorteDatum":null,"adres":{"straat":"Kerkstraat 13","postcode":"8500","gemeente":"Kortrijk"},"isIngeschreven":true,"namenVanExen":["Sofie","Berta","Philip","Albertoooo"],"aantalAutos":2}'
    let student = JSON.parse(tekst);
    console.log(student.voornaam);
}

window.addEventListener("load", setup2)