async function getLocationWeather(location) {
  try {
    const locationSanitized = String(location);
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${
        import.meta.env.VITE_APP_WEATHER_API_KEY
      }&q=${encodeURIComponent(locationSanitized)}`
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Failed to fetch weather data", error);
  }
}

export default getLocationWeather;
