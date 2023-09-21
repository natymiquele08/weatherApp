
const API = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey = "bece4615b0b0c64eb761d4679eae9304"


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.getElementById("icon");

async function checkWeather(city){
    const response = await fetch(API + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp;
    document.querySelector(".description").innerHTML = data.weather[0].description;
    document.querySelector(".humedad").innerHTML = data.main.humidity;
    document.querySelector(".viento").innerHTML = data.wind.speed;
   
    if(data.weather[0].main == "Clouds"){
        weatherIcon.innerHTML += `<i class="fa-solid fa-cloud fa-2xl"></i>`

    } 
    else if (data.weather[0].main == "Clear") {
        weatherIcon.innerHTML += `<i class="fa-solid fa-sun fa-2xl"></i>`

    } 
    else if (data.weather[0].main == "Rain") {
        weatherIcon.innerHTML += `<i class="fa-solid fa-cloud-rain fa-2xl"></i>`

    } 
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.innerHTML += `<i class="fa-solid fa-cloud-showers-heavy fa-2xl"></i>`

    } 
    else if (data.weather[0].main == "Mist") {
        weatherIcon.innerHTML += `<i class="fa-solid fa-smog fa-2xl"></i>`

    }


}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})







