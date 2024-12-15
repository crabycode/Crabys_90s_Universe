window.onload = function () {
    openPack();
};

function randomNumber(min, max) {
    return Math.ceil(Math.random()*(max-min)+min);
}

function openPack() {
    const cardsOpened = document.getElementById("pokemon-cards-opened");
    while (cardsOpened.firstChild) {
        cardsOpened.firstChild.remove();
    }
    let holoCount= 0;
    for (let i = 0; i < 11; i++) {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("pokemon-card");
        const cardImg = document.createElement("img");
        cardImg.id =`card-${i}`;
        let num;
        if (i===10) 
        {
            num = randomNumber(1, 16);
        } else 
        {
            num = randomNumber(1, 101);
        }
        cardImg.src = `pokemon-cards/base set (${num}).jpg`;
        if (num >= 1 && num <= 16) 
        {
            holoCount++;
        }
        cardDiv.appendChild(cardImg);
        cardsOpened.appendChild(cardDiv);
    }
    const holoCounter = document.getElementById("holo-counter");
    holoCounter.textContent = `Holo Cards: ${holoCount}`;
}
