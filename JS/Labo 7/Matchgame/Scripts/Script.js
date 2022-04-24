let AANTAL_HORIZONTAAL = 4;
let AANTAL_VERTICAAL = 3;
let AANTAL_KAARTEN = 6;
let score = 0;

const cards = new Map([
    ["skyline", 'Images/skyline.jpg'],
    ["supra", 'Images/supra.jpg'],
    ["sylvia", 'Images/sylvia.jpg'],
    ["rx7", 'Images/rx7.jpg'],
    ["evo", 'Images/evo.jpg'],
    ["bmw", 'Images/bmw.jpg'],
])

const setup = () => {
    generateCards()
    setTimeout(hideCards, 4000);
    shuffle()
}

const generateCards = () => {
    let cardsField = document.getElementById("cards");
    let cardsArray = Array.from(cards.keys());

    // Put pairs of each card in the field
    for (let i = 0; i < AANTAL_KAARTEN; i++) {
        let card1 = document.createElement("img");

        card1.src = cards.get(cardsArray[i]);
        card1.className = "card";
        card1.setAttribute("car", cardsArray[i]);
        card1.addEventListener("click", flipCard);
        cardsField.appendChild(card1);

        let card2 = document.createElement("img");
        card2.src = cards.get(cardsArray[i]);
        card2.className = "card";
        card2.setAttribute("car", cardsArray[i]);
        card2.addEventListener("click", flipCard);
        cardsField.appendChild(card2);
    }
}

const hideCards = () => {
    let cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
        cards[i].setAttribute("src", "Images/street racing.jpg");
    }
}

const flipCard = (event) => {
    // Flip the card and check if it is a match to a different flipped card
    let card = event.target;
    card.setAttribute("src", cards.get(card.getAttribute("car")));
    card.removeEventListener("click", flipCard);
    checkIfCardMatches(card);
}

const checkIfCardMatches = (card) => {
    // Check if the card is a match to a different flipped card
    let cards = document.getElementsByClassName("card");
    let flippedCards = [];
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].getAttribute("src") !== "images/achterkant.jpeg") {
            flippedCards.push(cards[i]);
        }
    }
    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute("car") === flippedCards[1].getAttribute("car")) {
            flippedCards[0].removeEventListener("click", flipCard);
            flippedCards[1].removeEventListener("click", flipCard);
            flippedCards[0].style.visibility = "hidden";
            flippedCards[1].style.visibility = "hidden";
            score++;
            changeScore()
            resetCards()
        } else {
            setTimeout(resetCards, 1000);
        }
    }
}

const resetCards = () => {
    let cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
        cards[i].setAttribute("src", "images/achterkant.jpeg");
        cards[i].addEventListener("click", flipCard);
    }
}

const shuffle = () => {
    let cards = document.getElementsByClassName("card");
    let cardsArray = Array.from(cards);
    let shuffledCards = cardsArray.sort(() => Math.random() - 0.5);
    let cardsField = document.getElementById("cards");
    for (let i = 0; i < cards.length; i++) {
        cardsField.appendChild(shuffledCards[i]);
    }
}

const changeScore = () => {
    let scoreElement = document.getElementById("score");
    let scoreText = document.createTextNode(score);

    scoreElement.firstChild.remove()
    scoreElement.appendChild(scoreText);
}


window.addEventListener('load', setup);