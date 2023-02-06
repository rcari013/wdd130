

const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=mangaldan&appid=407cbd338f74c8cc5dae52d33c1eabbe&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    document.getElementById('current-humidity').textContent = "Humidity "+ jsObject.main.humidity;
    document.getElementById('current-desc').textContent = jsObject.weather[0].description.toUpperCase(); 
    document.getElementById('icon').src="http://openweathermap.org/img/wn/"+jsObject.weather[0].icon+".png";
 

});
