const currentTemp = document.querySelector('#currentTemperature');
const weatherIcon = document.querySelector('#wIcon');
const caption = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=mangaldan&appid=407cbd338f74c8cc5dae52d33c1eabbe&units=imperial';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // console.log(data); 
      displayResults(data); 
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  let captionDesc = data.weather[0].description;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', `${captionDesc}`);
  caption.textContent = `${captionDesc}`;
}