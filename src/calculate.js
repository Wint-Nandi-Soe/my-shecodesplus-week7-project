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
    console.log(response.data);
    let tempElement=document.querySelector("#temperature");
    tempElement.innerHTML=Math.round(response.data.main.temp);
    let cityElement=document.querySelector("#city");
    cityElement.innerHTML=response.data.name;
    let descElement= document.querySelector("#description");
    descElement.innerHTML=response.data.weather[0].description;
    let humiElement = document.querySelector("#humidity");
    humiElement.innerHTML= response.data.main.humidity;
    let windElement = document.querySelector("#wind");
    windElement.innerHTML=response.data.wind.speed;
    let dateElement=document.querySelector("#date");
    dateElement.innerHTML=displayDate(response.data.dt*1000);
    let iconElement=document.querySelector("#icon");
    iconElement.setAttribute("src",`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt",response.data.weather[0].description);
    

}
let apiKey = "f25f47a5f94b046a3902e21ded66f15f";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Yangon&appid=${apiKey}&units=metric`;
axios.get(apiURL).then(displayTemperature);