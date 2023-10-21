const weather = document.querySelector(".weather");
const temperatureInput = document.querySelector("#temperature");
const windspeedInput = document.querySelector("#windspeed");
const temperatureValue = document.querySelector("#temperature-value");
const windspeedValue = document.querySelector("#windspeed-value");
const button = document.querySelector("#calculate-wc");

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

function calculateWindChillValue(temperature, windspeed) {
  if (temperature <= 50 && windspeed > 3) {
    return (
      (
        35.74 +
        0.6215 * temperature -
        35.75 * Math.pow(windspeed, 0.16) +
        0.4275 * temperature * Math.pow(windspeed, 0.16)
      ).toFixed(2) + "°F"
    );
  } else {
    return "N/A";
  }
}

button.addEventListener("click", () => {
  temperatureValue.textContent = temperatureInput.value;
  windspeedValue.textContent = windspeedInput.value;
  if (temperatureInput.value == "") {
    temperatureInput.setAttribute("placeholder", "Please, write a valid input");
    temperatureInput.focus();
  } else {
    if (windspeedInput.value == "") {
      windspeedInput.setAttribute("placeholder", "Please, write a valid input");
      windspeedInput.focus();
    } else {
      // Clean the results
      if (document.querySelector("#wind-chill-value") !== null) {
        const existingWindChillValue =
          document.querySelector("#wind-chill-value");
        weather.removeChild(existingWindChillValue);
        temperatureValue.textContent = "0";
        windspeedValue.textContent = "0";
      }
      temperatureValue.textContent = temperatureInput.value;
      windspeedValue.textContent = windspeedInput.value;

      const windChillValue = document.createElement("p");
      windChillValue.id = "wind-chill-value";
      const deleteButton = document.createElement("button");

      windChillValue.textContent = calculateWindChillValue(
        parseFloat(temperatureInput.value),
        parseFloat(windspeedInput.value)
      );
      deleteButton.textContent = "X";
      deleteButton.ariaLabel = "Remove Wind Chill value";

      windChillValue.append(deleteButton);

      weather.appendChild(windChillValue);

      deleteButton.addEventListener("click", () => {
        weather.removeChild(windChillValue);
      });
      temperatureInput.value = "";
      temperatureInput.setAttribute("placeholder", "");
      windspeedInput.value = "";
      windspeedInput.setAttribute("placeholder", "");
      temperatureInput.focus();
    }
  }
});
