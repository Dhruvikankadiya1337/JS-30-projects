document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const weatherIcon = document.querySelector(".weather-icon");

    const apiurl = "https://api.openweathermap.org/data/2.5/weather?&appid=a0983f5fcfe3b335196665b8e6d5de49&units=metric";

    async function checkweather(city) {
        const response = await fetch(`${apiurl}&q=${city}`);

        if (!response.ok) {
            console.log("API Error:", response.status);
            alert("City not found or API error");
            return;
        }

        let data = await response.json();
        // console.log(data); 

        const cityElem = document.querySelector(".city");
        const tempElem = document.querySelector(".temp");
        const humidityElem = document.querySelector(".humidity");
        const windElem = document.querySelector(".wind");

        if (cityElem && tempElem && humidityElem && windElem) {
            cityElem.innerHTML = data.name;
            tempElem.innerHTML = Math.round(data.main.temp) + "°C";
            humidityElem.innerHTML = data.main.humidity + "%";
            windElem.innerHTML = data.wind.speed + " km/h";
        }

        let weatherCondition = data.weather[0].main.toLowerCase();

        if (weatherCondition == "clouds") {
            weatherIcon.src = "img/cloud.png";
        } else if (weatherCondition == "clear") {
            weatherIcon.src = "img/clear.png";
        } else if (weatherCondition == "rain") {
            weatherIcon.src = "img/rain.png";
        } else if (weatherCondition == "drizzle") {
            weatherIcon.src = "img/drizzle.png";
        } else if (weatherCondition == "mist") {
            weatherIcon.src = "img/mist.png";
        } else {
            weatherIcon.src = "img/default.png"; 
        }
    }

    searchBtn.addEventListener('click', () => {
        const city = searchInput.value.trim();
        if (city) {
            checkweather(city);
        } else {
            alert("Please enter a city name!");
        }
    });
});

