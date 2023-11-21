// Number of visits and last day visited
const dateToday = new Date();
const msToDays = 86400000;
const today = Date.now();
let lastVisit = Number(window.localStorage.getItem("dateVisitSaved") || today);

const visitsDisplay = document.querySelector("#visits");
let numVisits = Number(window.localStorage.getItem("numVisitsSaved") || 0);

if (numVisits === 0) {
  visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
} else {
  let difference = today - lastVisit;
  if (difference < msToDays) {
    visitsDisplay.textContent = "Back so soon! Awesome!";
  } else {
    visitsDisplay.textContent = "You last visited " + (difference / msToDays).toFixed(0) + " days ago.";
}}

// Setters
numVisits++;
localStorage.setItem("numVisitsSaved", numVisits);
localStorage.setItem("dateVisitSaved", today);