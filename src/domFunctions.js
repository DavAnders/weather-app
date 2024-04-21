function updateWeatherDisplay(weatherData, forecastData) {
  const name = document.createElement("div");
  name.id = "nameDisplay";
  name.textContent = `Today in ${weatherData.name}, ${weatherData.region}`;

  const weather = document.getElementById("weatherDisplay");
  weather.innerHTML = "";
  weather.appendChild(name);

  const temp = document.createElement("div");
  temp.id = "tempDisplay";
  temp.textContent = `Temperature: ${weatherData.temperatureF}°F`;
  weather.appendChild(temp);

  const desc = document.createElement("div");
  desc.id = "descDisplay";
  desc.textContent = `Conditions: ${weatherData.weatherCondition}`;
  weather.appendChild(desc);

  const forecastContainer = document.createElement("div");
  forecastData.forecasts.forEach((forecast) => {
    const forecastDiv = document.createElement("div");
    forecastDiv.innerHTML = `<strong>${forecast.date}</strong>: High of ${forecast.maxTempF}°F,
    Low of ${forecast.minTempF}°F. Condition: ${forecast.conditionText}.`;
    forecastContainer.appendChild(forecastDiv);
  });

  weather.appendChild(forecastContainer);
}

export default updateWeatherDisplay;
