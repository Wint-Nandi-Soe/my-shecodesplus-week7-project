function displayDate(time){
    let date= new Date(time);
    let hour = date.getHours();
    if (hour<10){
        hour = `0${hour}`;
    }
    let minutes =date.getMinutes();
    if (minutes<10){
        minutes=`0${minutes}`;
    }
    let days=["Sunday", "Monday","Tueday","Wednesday","Thursday","Friday","Saturday"];
    let day=days[date.getDay()];
    return `${day} ${hour}:${minutes}`;
}
function displayTemperature (response){
    let tempElement=document.querySelector("#temperature");
    let cityElement=document.querySelector("#city");
    let descElement= document.querySelector("#description");
    let humiElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement=document.querySelector("#date");
    let iconElement=document.querySelector("#icon");
    cityElement.innerHTML=response.data.name;
    tempElement.innerHTML=Math.round(response.data.main.temp);
    descElement.innerHTML=response.data.weather[0].description;
    humiElement.innerHTML= response.data.main.humidity;
    windElement.innerHTML=response.data.wind.speed;
    dateElement.innerHTML=displayDate(response.data.dt*1000);
    iconElement.setAttribute("src",`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt",response.data.weather[0].description);
}
function searchCity(city){
    let apiKey = "f25f47a5f94b046a3902e21ded66f15f";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(displayTemperature);
}

function displayName(event){
    event.preventDefault();
    let cityName=document.querySelector("#city-input");
    searchCity(cityName.value);
}


//Form Section
let form = document.querySelector("#class-form");
form.addEventListener("submit", displayName);