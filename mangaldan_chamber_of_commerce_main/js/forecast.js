
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=16.0650&lon=120.4012&appid=407cbd338f74c8cc5dae52d33c1eabbe&units=imperial";
fetch(forecastURL)
  .then((response) => response.json())
  .then(data => {
 
  
  const noon = data.list.filter(x => x.dt_txt.includes('12:00:00'));
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
  const d = new Date(data.list[0].dt * 1000);
  let weekday = d.getDay(); //this is where the days from the json goes --- figure out how to loop the date//
    
  let counter = 0;

    noon.forEach(x => {
    let card = document.createElement('section') 
    let day = document.createElement('h3');
    let temp = document.createElement('h3');
    let desc = document.createElement('p');
    let imagesrc = "https://openweathermap.org/img/wn/" + x.weather[0].icon + '.png';
    let image = document.createElement('img');

    day.innerHTML = `${days[weekday]}`.toUpperCase();
    temp.innerHTML = `${x.main.temp} °F`;
    desc.innerHTML = `${x.weather[0].description}`.toUpperCase(); 

    image.setAttribute('src', imagesrc);
    image.alt = `${x.weather[0].description}`.toUpperCase() + "_" + (counter+1);

    if (counter >0) {
      card.classList.add("add_some_px_for_margin")
    }
    

    if (counter >2) {
      card.classList.add("hidden_for_300px")
    }
    
    
    if (weekday <5) {
      weekday += 1;
    }

    else {
      weekday = 0;
    }

    counter += 1;

    card.appendChild(day);
    card.appendChild(temp);
    card.appendChild(image);
    card.appendChild(desc)
   
   

    document.querySelector('div.cards').appendChild(card);
  });

       
});