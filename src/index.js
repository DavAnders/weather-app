//console.log(import.meta.env.VITE_APP_WEATHER_API_KEY);

fetch(
  `https://api.weatherapi.com/v1/current.json?key=${
    import.meta.env.VITE_APP_WEATHER_API_KEY
  }&q=London`
)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.error("Error fetching weather:", err));
