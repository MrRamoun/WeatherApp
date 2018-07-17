


let searchBox = document.createElement('input');
searchBox.type = 'text';
// searchBox.id = 'searchBox';
document.body.appendChild(searchBox);
// searchBox.addEventListener('blur', searchWeather);

let searchButton = document.createElement('button');
searchButton.addEventListener('click', searchWeather);
document.body.appendChild(searchButton);

let tempDisplay = document.createElement('div');
document.body.appendChild(tempDisplay);
tempDisplay.innerHTML = 'Type in any city to see the temperature.'

function searchWeather(e) {
  tempDisplay.innerHTML = 'Fetching results...'
  let city = searchBox.value;
  let weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=f342bc09b6f0bcd7c671338423a7e5cc`;

  let Kelvin;

  // URL (required), options (optional)
  fetch(weatherURL, { mode: 'cors'})
    .then(function(response) {
       return response.json();
    })
    .then(function(response) {
      Kelvin = response.main.temp;
      // console.log(`The temperature in Kelvin is ${Kelvin}°K`);
      // console.log(`The temperature in Celcius is ${Math.floor(Kelvin-273.15)}°C`);

      tempDisplay.innerHTML = `The temperature in Celcius is ${Math.floor(Kelvin-273.15)}°C`;
    })
    .catch(function(err) {
     console.log("Something went wrong.");
     tempDisplay.innerHTML = 'Please type in a valid city name.'
  });

}
