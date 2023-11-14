const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const APIkey = "3bd560edd98e4bff73765176414d6a5d";
const lat = "49.75";
const lon = "6.64";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${APIkey}`;

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

function capitalizeString (string) {
    return string.replace(/\b\w/g, (char) => char.toUpperCase());
}

function displayResults(data) {
    let temp = data.main.temp;
    let roundedTemp = Math.round(temp);
    currentTemp.innerHTML = `${roundedTemp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let descNotC = data.weather[0].description;
    let desc = capitalizeString(descNotC);
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}


// function displayResults(data) {
//     let temp = data.main.temp;
//     let roundedTemp = Math.round(temp);
//     currentTemp.innerHTML = `${roundedTemp}&deg;F`;

//     const iconContainer = document.querySelector("#weather-icon");
//     iconContainer.innerHTML = ""; // clean existent list

//     data.weather.forEach(weatherEvent => {
//         const iconSrc = `https://openweathermap.org/img/w/${weatherEvent.icon}.png`;
//         const descNotC = weatherEvent.description;
//         const desc = capitalizeString(descNotC);

//         const icon = document.createElement("img");
//         icon.setAttribute('src', iconSrc);
//         icon.setAttribute('alt', desc);

//         iconContainer.appendChild(icon);

//         const caption = document.createElement("figcaption");
//         caption.textContent = `${desc}`;
//         iconContainer.appendChild(caption);
//     });
// }

