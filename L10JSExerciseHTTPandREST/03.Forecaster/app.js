function attachEvents() {

    document.querySelector("#submit")
        .addEventListener('click', getWeatherDataForLocation);

}

const WEATHER_SYMBOLS = {
    "Sunny": "☀",
    "Partly sunny": "⛅",
    "Overcast": "☁",
    "Rain": "☂",
    "Degrees": "°",
}

async function getWeatherDataForLocation() {

    const locationName = document.querySelector("#location").value;
    // TODO: error handling
    const locationResponse = await (await fetch("http://localhost:3030/jsonstore/forecaster/locations")).json();

    const location = locationResponse.find(l => l.name === locationName);

    const currentConditionsResponse = await (await fetch(`http://localhost:3030/jsonstore/forecaster/today/${location.code}`)).json();
    console.log(currentConditionsResponse);

    const threeDayForecastResponse = await (await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${location.code}`)).json();
    console.log(threeDayForecastResponse);

    const forecastContainer = document.querySelector("#forecast");
    forecastContainer.style.display = "block";

    const currentWeatherContainer = document.createElement("div");
    currentWeatherContainer.classList.add("forecasts");
    const weatherSymbol = document.createElement("span");
    weatherSymbol.classList.add("condition", "symbol");
    weatherSymbol.textContent = WEATHER_SYMBOLS[currentConditionsResponse.forecast.condition];

    const dataHolder = document.createElement("span");
    dataHolder.classList.add("condition");

    const name = document.createElement("span");
    name.textContent = currentConditionsResponse.name;
    dataHolder.appendChild(name);

    const temp = document.createElement("span");
    temp.textContent = `${currentConditionsResponse.forecast.low} `;
    dataHolder.appendChild(temp);

    currentWeatherContainer.appendChild(weatherSymbol);

    document.querySelector("#current").appendChild(currentWeatherContainer);

}

attachEvents();