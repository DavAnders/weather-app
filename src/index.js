import getLocationWeather from "./apiFunctions";

document
  .getElementById("weatherForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const location = document.getElementById("locationInput").value;
    try {
      const weatherData = await getLocationWeather(location);
      updateWeatherDisplay(weatherData);
    } catch (error) {
      console.error("Failed to fetch weather data:", error);
    }
  });

function updateWeatherDisplay(weatherData) {
  const weather = document.getElementById("weatherDisplay");
  weather.innerHTML = "";

  const temp = document.createElement("div");
  temp.id = "tempDisplay";
  temp.textContent = `Temperature: ${weatherData.temperatureC}°C`;

  const desc = document.createElement("div");
  desc.id = "descDisplay";
  desc.textContent = `Conditions: ${weatherData.weatherCondition}`;

  weather.appendChild(temp);
  weather.appendChild(desc);
}
