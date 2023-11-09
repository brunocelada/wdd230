const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getProphetData(url){
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        // console.table(data.prophets); // check point
        displayProphets(data.prophets); 
    }
}

getProphetData(url);

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");

        let fullNameString = prophet.name + " " + prophet.lastname;
        fullName.textContent = fullNameString;

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${fullNameString}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height","440");

        card.appendChild(fullName);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}