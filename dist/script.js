const button = document.getElementById("search-button");
const city = document.getElementById("city-input");
const city_info = document.getElementById("city-name"); 
const region = document.getElementById("region");
const localtime = document.getElementById("city-time");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const point = document.getElementById("point");
const feelslike = document.getElementById("feels-like")
const humidity = document.getElementById("humidity")
const windspeed = document.getElementById("windspeed");
const heatindex = document.getElementById("heatindex");
const co = document.getElementById("co");
const no2 = document.getElementById("no2");
const o3 = document.getElementById("o3");
const so2 = document.getElementById("so2");
const pm2 = document.getElementById("pm2");
const pm10 = document.getElementById("pm10");
const condition2 = document.getElementById("condition2");
const weathericon = document.getElementById("weather-icon");
const incorrect = document.getElementById("incorrect");
const errorimage = document.getElementById("errorimage");



async function getData(cityName){
    const data =await fetch(`https://api.weatherapi.com/v1/current.json?key=b41407e1334f4999a7b90531251801&q=${cityName}&aqi=yes`)
    return await data.json();
}

button.addEventListener("click",async ()=>{
    const cityName = city.value;
    try{
        const result = await getData(cityName);

        if (!result.location) {
            incorrect.innerHTML = `${cityName} is not a City. Please Enter a Valid City Name`
            return;
        }
    
    city_info.innerHTML = `${result.location.name}, ${result.location.region}`;
    incorrect.innerHTML = "";
    region.innerHTML = `${result.location.country}`;
    localtime.innerHTML = `${result.location.localtime}`;
    temperature.innerHTML = `${result.current.temp_c}°C`
    condition.innerHTML = `${result.current.condition.text}`;
    point.innerHTML = `Latitude: ${result.location.lat}"N | Longitude: ${result.location.lon}"E`
    feelslike.innerHTML = `${result.current.feelslike_c}°C`;
    humidity.innerHTML = `${result.current.humidity}%`
    windspeed.innerHTML = `${result.current.wind_kph} km/h`;
    condition2.innerHTML = result.current.condition.text;
    heatindex.innerHTML = `${result.current.heatindex_c}°C`;
    co.innerHTML = `${result.current.air_quality.co} µg/m³`
    no2.innerHTML = `${result.current.air_quality.no2} µg/m³`
    o3.innerHTML = `${result.current.air_quality.o3} µg/m³`
    so2.innerHTML = `${result.current.air_quality.so2} µg/m³`
    pm2.innerHTML = `${result.current.air_quality.pm2_5} µg/m³`
    pm10.innerHTML = `${result.current.air_quality.pm10} µg/m³`
    weathericon.src = result.current.condition.icon;
    } catch(error){
        alert("Please enter a valid city name");
    }
   
});

