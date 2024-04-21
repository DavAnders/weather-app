import { getLocationForecast, getLocationWeather } from "./apiFunctions";
import updateWeatherDisplay from "./domFunctions";

document
  .getElementById("weatherForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const spinner = document.getElementById("spinner");
    const location = document.getElementById("locationInput").value;
    spinner.classList.remove("hidden");
    try {
      const weatherData = await getLocationWeather(location);
      const forecastData = await getLocationForecast(location);
      updateWeatherDisplay(weatherData, forecastData);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      spinner.classList.add("hidden");
    }
  });
