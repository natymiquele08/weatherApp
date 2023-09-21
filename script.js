
const API = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey = "bece4615b0b0c64eb761d4679eae9304"


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(API + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp;
    document.querySelector(".description").innerHTML = data.weather[0].description;
    document.querySelector(".humedad").innerHTML = data.main.humidity;
    document.querySelector(".viento").innerHTML = data.wind.speed;
   
    


}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})







