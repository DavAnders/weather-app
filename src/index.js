import { getLocationForecast, getLocationWeather } from "./apiFunctions";
import updateWeatherDisplay from "./domFunctions";

document
  .getElementById("weatherForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const location = document.getElementById("locationInput").value;
    try {
      const weatherData = await getLocationWeather(location);
      const forecastData = await getLocationForecast(location);
      updateWeatherDisplay(weatherData, forecastData);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  });
