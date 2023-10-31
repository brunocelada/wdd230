// Number of visits and last day visited
const dateToday = new Date();
const msToDays = 86400000;
const today = Date.now();
let lastVisit = Number(window.localStorage.getItem("dateVisitSaved") || 0);

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
console.log("Number of visits: " + numVisits)
numVisits++;
localStorage.setItem("numVisitsSaved", numVisits);
localStorage.setItem("dateVisitSaved", today);


// Day test
const sampleDay = new Date();
const day = 25; sampleDay.setDate(day);
const month = 9; sampleDay.setMonth(month); // October 
const year = 2023; sampleDay.setFullYear(year);

console.log("Sample Day: " + sampleDay);
let difference = today - sampleDay;

if (difference < msToDays) {
    console.log("Status: less than a day")
    
  } else {
    console.log("Status: more or equal than a day")
  }
console.log("Sample distance in days: " + (difference / msToDays).toFixed(0));