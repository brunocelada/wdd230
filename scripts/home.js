// Number of visits
const visitsDisplay = document.querySelector("#visits");
let numVisits = Number(window.localStorage.getItem("numVisitsSaved") || 0);

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = "This is your first visit. Welcome!";
}

numVisits++;
localStorage.setItem("numVisitsSaved", numVisits);

// Weather
const tempDisplay = document.querySelector("#temperature");
const weatherDisplay = document.querySelector("#weather");

    // will be modified
tempDisplay.textContent = 25;
weatherDisplay.textContent = "Sunshine";