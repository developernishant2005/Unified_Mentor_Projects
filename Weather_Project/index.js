const apiKey = "3de6abb9fe3b9ba4deefd5f1c4457cc4";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "*C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

    console.log(data.weather[0].main);
    switch (data.weather[0].main) {
      case "Clouds":
        weatherIcon.src = "img/clouds.png";
        break;
      case "Clear":
        weatherIcon.src = "img/clear.png";
        break;
      case "Rain":
        weatherIcon.src = "img/rain.png";
        break;
      case "Drizzle":
        weatherIcon.src = "img/drizzle.png";
        break;
      case "Mist":
        weatherIcon.src = "img/mist.png";
        break;
      default:
        weatherIcon.src = "img/default.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

