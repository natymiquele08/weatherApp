
const API = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey = "bece4615b0b0c64eb761d4679eae9304"


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".searchButton");
const weatherIcon = document.querySelector(".imagenPrincipal");


async function checkWeather(city){
    const response = await fetch(API + city + `&appid=${apikey}`);
    var data = await response.json();

    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + " °C";
    document.querySelector(".description").innerHTML = data.weather[0].description;
    document.querySelector(".humedad").innerHTML = data.main.humidity + "%";
    document.querySelector(".viento").innerHTML = data.wind.speed + " km/hr";
   
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "clouds.png"
        
        

    } 
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "sun.png"

    } 
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "rain.png"

    } 
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "drizzle.png"

    } 
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "mist.png"

    }

    document.querySelector(".weather").style.display = "block";


}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})







