

const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=16.06690864165699&lon=120.40468203334068&exclude=hourly,daily,minutely&appid=55fabb0529e11ab638f2e68f25e2cb38&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.current.temp;
    document.getElementById('current-humidity').textContent = jsObject.current.humidity;
    document.getElementById('current-desc').textContent = jsObject.current.weather[0].description.toUpperCase(); 
    document.getElementById('icon').src="http://openweathermap.org/img/wn/"+jsObject.current.weather[0].icon+".png";
 

});
