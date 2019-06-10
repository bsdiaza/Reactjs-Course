const location = "Bogota,co";
const api_key = "629067db269602787ba26eb1403dbd2c";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&APPID=${api_key}`;