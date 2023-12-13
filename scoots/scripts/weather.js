const weatherDiv = document.querySelector("#weatherdiv");
const wAlert = document.querySelector("#alert");

const APIkey = "3bd560edd98e4bff73765176414d6a5d";
const lat = "20.420693770923638";
const lon = "-86.92335913831732";
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${APIkey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${APIkey}`;

async function apiFetch(url, funcion) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      funcion(data);
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch(weatherUrl, displayWeather);
apiFetch(forecastUrl, displayForecast);

function capitalizeString(string) {
  return string.replace(/\b\w/g, (char) => char.toUpperCase());
}

function displayWeather(data) {
  const figure = document.createElement("figure");
  const icon = document.createElement("img");
  const tempDisplay = document.createElement("span");
  const humidityDisplay = document.createElement("span");
  const figcaption = document.createElement("figcaption");

  let temp = data.main.temp;
  let roundedTemp = Math.round(temp);
  tempDisplay.innerHTML = `${roundedTemp} &deg;F`;

  let humidity = data.main.humidity;
  let roundedHum = Math.round(humidity);
  humidityDisplay.innerHTML = `Humidity: ${roundedHum}%`;

  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let descNotC = data.weather[0].main + ": " + data.weather[0].description;
  let desc = capitalizeString(descNotC);

  icon.setAttribute("src", iconsrc);
  icon.setAttribute("alt", desc);

  figcaption.textContent = `${desc}`;

  figure.appendChild(icon);
  figure.appendChild(tempDisplay);
  figure.appendChild(humidityDisplay);
  figure.appendChild(figcaption);
  weatherDiv.appendChild(figure);

  showMaxTemp(Math.round(data.main.temp_max));
}

// Forecast
const forecast = document.querySelector("#forecast");

const wordDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function displayForecast(data) {
  let tomorrow = data.list[0];

  const wordDay = [wordDays[new Date(tomorrow.dt_txt).getDay()]];

  let temp = tomorrow.main.temp;
  let roundedTemp = Math.round(temp);

  let figure = document.createElement("figure");
  let weatherIcon = document.createElement("img");
  weatherIcon.setAttribute(
    "src",
    `https://openweathermap.org/img/w/${tomorrow.weather[0].icon}.png`
  );
  weatherIcon.alt = tomorrow.weather[0].description;

  let displayTemp = document.createElement("span");
  displayTemp.innerHTML = `Tomorrow ${wordDay}: ${roundedTemp} &deg;F`;

  let description = document.createElement("span");
  description.innerHTML = `${capitalizeString(
    tomorrow.weather[0].main + ": " + tomorrow.weather[0].description
  )} `;

  figure.appendChild(weatherIcon);
  figure.appendChild(displayTemp);
  figure.appendChild(description);
  forecast.appendChild(figure);
}

function showMaxTemp(maxTemp) {
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const closeBanner = document.createElement("button");
  closeBanner.id = "closeBanner";

    h3.innerHTML = `High temperature of today`;
    p.innerHTML = `${maxTemp} &deg;F`;
  closeBanner.innerHTML = "✖";

  wAlert.appendChild(closeBanner);
  wAlert.appendChild(h3);
  wAlert.appendChild(p);

  closeBanner.addEventListener("click", () => {
    wAlert.style.display = "none";
  });
}


// Reservation button
const reservationBtn = document.querySelector("#reservation-button");

reservationBtn.addEventListener("click", () => {
  open("reservations.html");
});
