let button = document.getElementById("button");
let cityInput = document.getElementById("searchCity");
let city = document.getElementById("city");
let country = document.getElementById("country");
let temp = document.getElementById("temp");
let tempFeels = document.getElementById("feelsLike");
let weatherType = document.getElementById("weatherType");
let windType = document.getElementById("windType");
let windSpeed = document.getElementById("speed");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");
let icon = document.getElementById("icon");

button.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityInput.value + '&units=metric&appid=340364e53bc21b0b697dfe21cea238a3')
.then(response => response.json())
.then(data => {
    let tempValue = data["main"]["temp"];
    let tempfeelsValue = data["main"]["feels_like"];
    let cityValue = data["name"];
    let countryValue = data["sys"]["country"];
    let weatherValue = data["weather"][0]["description"];
    let windspeedValue = data["wind"]["speed"];
    let humidityValue = data["main"]["humidity"];
    let pressureValue = data["main"]["pressure"];
    let iconValue = "http://openweathermap.org/img/wn/" + data["weather"][0]["icon"] + "@4x.png";

    city.innerHTML = cityValue;
    temp.innerHTML = Math.round(tempValue) + " ℃";
    tempFeels.innerHTML = "Feels like " + "<br>" + Math.round(tempfeelsValue) + " ℃";
    weatherType.innerHTML = weatherValue;
    windSpeed.innerHTML = windspeedValue + " m/s";
    humidity.innerHTML = humidityValue + "%";
    pressure.innerHTML = pressureValue + " hPa";
    country.innerHTML = countryValue;
    icon.src = iconValue;
    document.querySelector(".infoCont").style.display = "block";
    document.querySelector(".iconCont").style.display = "block";
    document.querySelector(".tempCont").style.display = "block";
    document.querySelector(".cityCont").style.display = "block";
    console.log(data)
})


.catch(err => alert("Invalid city name!"))

})