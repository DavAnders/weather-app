class WeatherData {
  constructor(apiResponse) {
    const { location, current } = apiResponse;
    this.name = location.name;
    this.region = location.region;
    this.country = location.country;
    this.latitude = location.lat;
    this.longitude = location.lon;
    this.timeZoneId = location.tz_id;
    this.localTime = location.localtime;

    this.temperatureC = current.temp_c;
    this.temperatureF = current.temp_f;
    this.weatherCondition = current.condition.text;
    this.weatherIconUrl = `https:${current.condition.icon}`;
    this.windSpeedMph = current.wind_mph;
    this.windSpeedKph = current.wind_kph;
    this.windDirection = current.wind_dir;
    this.windDegree = current.wind_degree;
    this.pressureMb = current.pressure_mb;
    this.pressureIn = current.pressure_in;
    this.precipitationMm = current.precip_mm;
    this.precipitationIn = current.precip_in;
    this.humidity = current.humidity;
    this.cloudCover = current.cloud;
    this.feelsLikeC = current.feelslike_c;
    this.feelsLikeF = current.feelslike_f;
    this.visibilityKm = current.vis_km;
    this.visibilityMiles = current.vis_miles;
    this.uvIndex = current.uv;
    this.gustSpeedMph = current.gust_mph;
    this.gustSpeedKph = current.gust_kph;
  }
}

class ForecastData {
  constructor(apiResponse) {
    const { forecast } = apiResponse;
    this.forecasts = forecast.forecastday.map((day) => ({
      date: day.date,
      maxTempC: day.day.maxtemp_c,
      minTempC: day.day.mintemp_c,
      maxTempF: day.day.maxtemp_f,
      minTempF: day.day.mintemp_f,
      conditionText: day.day.condition.text,
      conditionIcon: `https:${day.day.condition.icon}`,
    }));
  }
}

async function getLocationWeather(location) {
  try {
    const locationSanitized = String(location).trim();
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${
        import.meta.env.VITE_APP_WEATHER_API_KEY
      }&q=${encodeURIComponent(locationSanitized)}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch weather data: " + response.status);
    }
    const data = await response.json();
    return new WeatherData(data);
  } catch (error) {
    console.error("Failed to fetch weather data", error);
    return null;
  }
}

async function getLocationForecast(location) {
  try {
    const locationSanitized = String(location).trim();
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${
        import.meta.env.VITE_APP_WEATHER_API_KEY
      }&q=${encodeURIComponent(locationSanitized)}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch forecast: " + response.status);
    }
    const data = await response.json();
    return new ForecastData(data);
  } catch (error) {
    console.error("Failed to fetch forecast", error);
    return null;
  }
}
export { getLocationWeather, getLocationForecast };
