// const apiKey = "910803ef591a2054d61ba88af247cccf";

// Function to construct the API URL based on the city name
function getApiUrl(city) {
    return `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=910803ef591a2054d61ba88af247cccf`;
}

const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(getApiUrl(city));

    if (!response.ok) {
        alert("City not found");
        return;
    }
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    //   here displaing imeges according to weather condition
    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "assets/clouds.png";
    }

    if (data.weather[0].main == "Haze") {
        weatherIcon.src = "assets/fog.png";
    }

    if (data.weather[0].main == "Clear") {
        weatherIcon.src = "assets/sun.png";
    }

    if (data.weather[0].main == "Fog") {
        weatherIcon.src = "assets/fog.png";
    }

    if (data.weather[0].main == "Smoke") {
        weatherIcon.src = "assets/carbon-dioxide.png";
    }

    if (data.weather[0].main == "Rain") {
        weatherIcon.src = "assets/sun.png";
    }

    if (data.weather[0].main == "Mist") {
        weatherIcon.src = "assets/mist.png";
    }

    if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "assets/drizzle.png";
    }

    let styles = document.querySelector(".weather");
    styles.style.display = "block";

    // here's empty search box ofter execute the result
    searchBox.value = '';
}

// searchBtn.addEventListener("click", () => {
//     checkWeather(searchBox.value);
// });
function callAction() {
    checkWeather(searchBox.value);
}