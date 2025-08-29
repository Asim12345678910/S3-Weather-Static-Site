const apiKey = "5f8bec8212faf385494737c5681e51f8";
const checkWeatherBtn = document.getElementById("checkWeather");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");

checkWeatherBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (!city) {
        weatherResult.innerHTML = "Please enter a city name.";
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) throw new Error("City not found");
            return response.json();
        })
        .then(data => {
            weatherResult.innerHTML = `
                <h3>${data.name}, ${data.sys.country}</h3>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
        })
        .catch(err => {
            weatherResult.innerHTML = `Error: ${err.message}`;
        });
});
