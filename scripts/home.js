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
const currentTemp = document.querySelector("#temperature");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const APIkey = "3bd560edd98e4bff73765176414d6a5d";
const lat = "-32.95999066939326";
const lon = "-60.68229215060642";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIkey}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function capitalizeString(string) {
    return string.replace(/\b\w/g, (char) => char.toUpperCase());
}

function displayResults(data) {
    let temp = data.main.temp;
    let roundedTemp = Math.round(temp);
    currentTemp.innerHTML = `${roundedTemp} &deg;C&nbsp;&nbsp;`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let descNotC = data.weather[0].description;
    let desc = capitalizeString(descNotC);
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}