// Weather
const currentTemp = document.querySelector("#temperature");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const banner = document.querySelector("#banner");

const APIkey = "3bd560edd98e4bff73765176414d6a5d";
const lat = "-32.95999066939326";
const lon = "-60.68229215060642";
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIkey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${APIkey}`;

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
apiFetch(forecastUrl, displayForecast);
apiFetch(weatherUrl, displayWeather);

function capitalizeString(string) {
  return string.replace(/\b\w/g, (char) => char.toUpperCase());
}

function displayWeather(data) {
  let temp = data.main.temp;
  let roundedTemp = Math.round(temp);
  currentTemp.innerHTML = `${roundedTemp} &deg;C`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let descNotC = data.weather[0].description;
  let desc = capitalizeString(descNotC);
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = `${desc}`;

  displayWindChill(temp, data.wind.speed);
}

// Windspeed
const windspeedDisplay = document.querySelector("#windspeed");
const actualWeather = document.querySelector(".weather-card")

function temperatureConversor(value, mode) {
  if (mode) {
    // Mode 1 (true) = From Celcius to Fahrenheit
    return (value * 9) / 5 + 32;
  } // Mode 2 (false) = From Fahrenheit to Celcius
  else {
    return ((value - 32) * 5) / 9;
  }
}
function velocityConversor(value, mode) {
  if (mode) {
    // Mode 1 (true) = From Kph to Mph
    return value / 1.60934;
  } // Mode 2 (false) = From Miles per hour to Kilometers per hour
  else {
    return value * 1.60934;
  }
}

function calculateWindChill(temp, windsp) {
  // Limit values in metric units
  const limitTemp = temperatureConversor(50, false);
  const limitWindSpeed = velocityConversor(3, false);

  if (limitTemp <= 50 && limitWindSpeed > 3) {
    return (
      (35.74 +
        0.6215 * temp -
        35.75 * Math.pow(windsp, 0.16) +
        0.4275 * temp * Math.pow(windsp, 0.16)
      ).toFixed(2)
    );
  } else {
    return "N/A";
  }
}

function displayWindChill(temp, windspeedValue) {
  windspeedDisplay.innerHTML = `Wind Speed: ${windspeedValue} m/s`;

  const windChill = document.createElement("p");
  windChill.id = "wind-chill";

  let windchillValue = calculateWindChill(temp, windspeedValue);

  let windChillValueRounded = Math.round(windchillValue);
  windChill.innerHTML = `Wind Chill Value: ${windChillValueRounded} &deg;C`;
  actualWeather.appendChild(windChill);
}

// Forecast
const forecast = document.querySelector("#days-forecast");

const wordDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function displayForecast(data) {
  let listOfDays = [];
  // because this API it's free, the forecast/daily doesn't work, so I need to use 1 hourly forecast from each day. The day have 8 hourly forecasts.
  for (let index = 1; index < 4; index++) {
    listOfDays.push(data.list[index * 8]);
  }

  listOfDays.forEach(day => {
    let futureDayNumber = new Date(day.dt_txt).getDate()

    const wordDay = [wordDays[new Date(day.dt_txt).getDay()]];

    let temp = day.main.temp;
    let roundedTemp = Math.round(temp);

    let figure = document.createElement("figure");
    let weatherIcon = document.createElement("img");
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/w/${day.weather[0].icon}.png`)

    let displayTemp = document.createElement("span");
    displayTemp.innerHTML = `${wordDay} ${roundedTemp} &deg;C`;

    let description = document.createElement("span");
    description.innerHTML = `${capitalizeString(day.weather[0].description)} `;

    figure.appendChild(weatherIcon);
    figure.appendChild(displayTemp);
    figure.appendChild(description);
    figure.classList.add("weather-card");
    forecast.appendChild(figure);
  });

  // Banner
  // let todayDayNumber = new Date(data.list[0].dt_txt).getDay();
  let todayDayNumber = 2;
  console.log(todayDayNumber);
  if (todayDayNumber == 1 || todayDayNumber == 2 || todayDayNumber == 3) {
    showBanner();
  }
  else {
    banner.style.display = "none";
  }
}


function showBanner() {
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const closeBanner = document.createElement("button");
  closeBanner.id = "closeBanner";

  h3.innerHTML = "Rosario Chamber of Commerce meet and greet!"
  p.innerHTML = "Attend on Wednesday at 7:00 p.m."
  closeBanner.innerHTML = "✖";

  banner.appendChild(closeBanner);
  banner.appendChild(h3);
  banner.appendChild(p);

  banner.style.border = "solid 1px var(--contrast)";

  closeBanner.addEventListener("click", () => {
    banner.style.display = "none";
  });
}

