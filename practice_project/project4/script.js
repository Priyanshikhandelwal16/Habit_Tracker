document.addEventListener("DOMContentLoaded", ()=>{
    const weatherInput = document.getElementById("weather-input")
    const weatherbtn = document.getElementById("weather-btn")
    const weatherInfo = document.getElementById("weather-info")
    const cityNameDisplay = document.getElementById("cityname")
    const temperatureDisplay = document.getElementById("Temperature")
    const descriptionDisplay = document.getElementById("description")
    const errorDisplay = document.getElementById("error-message")
    const API_KEY = "5f56d525d1619d0a2cd2eac4ce55588e"; //env variables

    weatherbtn.addEventListener("click" , async ()=>{
    const city =   weatherInput.value.trim();
    if(!city) return;

    try {
       const weatherData = await fetchWeatherData(city)
       displayWeatherData(weatherData)
    } catch (error) {
        showError()
    }

    })

    async function fetchWeatherData(city){
         const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        const response=  await fetch(url)
        console.log(typeof response);
    console.log("RESPONSE", response);
        if (!response.ok) {
            throw new Error("City not found!");
        }
     const data=  await  response.json()
     return data
    }

    function displayWeatherData(data){
         console.log(data)
         const {name,main,weather} = data
         cityNameDisplay.textContent = name
         temperatureDisplay.textContent = `Temperature: ${main.temp}`
         descriptionDisplay.textContent = `Weather: ${weather[0].description}`
         weatherInfo.classList.remove("hidden")
         errorDisplay.classList.add("hidden")
    }

    function showError(){
        weatherInfo.classList.add("hidden")
        errorDisplay.classList.remove("hidden")
    }
})