/*window.addEventListener("load", ()=>{
    let lon
    let lat

    let temperaturaValor = document.getElementsByClassName("temperaturaValor");
    let temperaturaDescripcion = document.getElementsByClassName("temperaturaDescripcion");
    let ubicacion = document.getElementsByClassName("ubicacion");
    let vientoVelocidad = document.getElementsByClassName("vientoVelocidad");

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(posicion => {
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude

            const URL= `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=bece4615b0b0c64eb761d4679eae9304`
            

            fetch(URL)
            .then( response => {return response.json()})
            .then (data => {
                
                let temp = Math.round(data.main.temp)
                temperaturaValor.textContent = temp





            }
                )

        })

    }




}) */


const API = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=montevideo&appid=bece4615b0b0c64eb761d4679eae9304";


async function checkWeather(){
    const response = await fetch(API);
    var data = await response.json();

    console.log(data);

    document.getElementById("").innerHTML = data.name;
    document.getElementById("").innerHTML = data.main.temp;
    document.getElementById("").innerHTML = data.main.humidity;
    document.getElementById("").innerHTML = data.wind.speed;
   
    


}
checkWeather();






