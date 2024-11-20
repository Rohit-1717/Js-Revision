document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("cityName-input");
  const getweatherbtn = document.getElementById("fetch-weatherbtn");
  const weatherInfo = document.getElementById("weatherInfo");
  const citynameDisplay = document.getElementById("cityName");
  const temperature = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMsg = document.getElementById("error-msg");

  const API_KEY = "9dcac0f27e6e2e92697f24e39fc67ecd";

  getweatherbtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    try {
      const weatherData = await fetchweatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  });

  async function fetchweatherData(city) {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    const response = await fetch(URL);

    console.log(typeof response);
    console.log("RESPONSE:", response);

    if (!response.ok) {
      throw new Error("City Not Found");
    }
    const data = await response.json();
    return data;
  }

  function displayWeatherData(data) {
    console.log(data);
    const { name, main, weather } = data;
    citynameDisplay.textContent = `City: ${name}`;
    temperature.textContent = `Temperature: ${main.temp}`;
    descriptionDisplay.textContent = `Description: ${weather[0].description}`;

    // Unlock the display
    weatherInfo.classList.remove("hidden");
    errorMsg.classList.add("hidden");
  }

  function showError() {
    weatherInfo.classList.add("hidden");
    errorMsg.classList.remove("hidden");
  }
});
