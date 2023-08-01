const apiKey = '848e4c9efef048e494f100521210205';
const weatherCards = document.getElementById('weatherCards');
const cityInput = document.getElementById('cityInput');

function updateWeather(city = 'Cairo') {
  cityInput.value = city;
  fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&aqi=no&alerts=no`)
    .then(response => response.json())
    .then(data => {
      const country = data.location.country;
      weatherCards.innerHTML = `<h2 style="text-transform: uppercase;" class="text-center py-2 text-dark fw-bolder mb-4">${city}, ${country}</h2>`;
      for (let i = 0; i < 3; i++) {
        const date = data.forecast.forecastday[i].date;
        const condition = data.forecast.forecastday[i].day.condition.text;
        const icon = data.forecast.forecastday[i].day.condition.icon;
        const temp = data.forecast.forecastday[i].day.avgtemp_c;
        const humidity = data.forecast.forecastday[i].day.avghumidity;
        const wind = data.forecast.forecastday[i].day.maxwind_kph;
        const cloud = data.forecast.forecastday[i].day.avgvis_km;

        weatherCards.innerHTML += `
          <div class="col-md-4">
            <div class="card">
              <div class="card-body fw-bolder">
                <h5 class="card-title text-center">${date}</h5>
                <div class="text-center my-4">
                <img src="${icon}" alt="Weather icon">
                <p class="card-text">${condition}</p>
                </div>
                <p class="card-text"><i class="fa-solid fa-temperature-three-quarters me-2"></i> Average Temperature: ${temp}°C</p>
                <p class="card-text"><i class="fa-solid fa-droplet me-2"></i> Humidity: ${humidity}%</p>
                <p class="card-text"><i class="fa-solid fa-wind me-2"></i> Wind: ${wind} kph</p>
                <p class="card-text"><i class="fa-solid fa-cloud me-2"></i> Cloud: ${cloud} km</p>
              </div>
            </div>
          </div>
        `;
      }
    });
}

function searchCity() {
  const city = cityInput.value;
  updateWeather(city);
}

updateWeather();




var video = document.getElementById("background-video");

function resizeVideo() {
  video.width = window.innerWidth;
  video.height = window.innerHeight;
}

window.addEventListener("resize", resizeVideo);
resizeVideo();
