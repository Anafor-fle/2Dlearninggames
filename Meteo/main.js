const openWeatherKey = '1d9d2f2f0eb68e911d3d18f685b1661b';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

function getForecast() {
  getForecastMontreal();
  getForecastBrazzaville();
  getForecastBrussels();
 }

 //Downloading weather data from the API

  // Montreal forecast

  const getForecastMontreal = async () => {
    const city = 'montreal';
    const urlToFetch = `${weatherUrl}${city}&units=metric&appid=${openWeatherKey}&lang=fr`;
     try {
    const response = await fetch(urlToFetch);
     if (response.ok) {
       const jsonResponse = await response.json();
       document.getElementById('meteoiconMontreal').src =`http://openweathermap.org/img/wn/${jsonResponse.weather[0].icon}@4x.png` //displays weather icon
       document.getElementById('temperatureMontreal').innerHTML = `${jsonResponse.main.temp}°C` //displays temperature
       montrealWeather = jsonResponse.weather[0].main; // creating a global var to use it checkAnswerMontreal function
       return jsonResponse;
     }
    } catch (error) {
       console.log(error);
     }
  }

   //Brazzaville forecast

 const getForecastBrazzaville = async () => {
  const city = 'brazzaville';
  const urlToFetch = `${weatherUrl}${city}&units=metric&appid=${openWeatherKey}&lang=fr`;
   try {
  const response = await fetch(urlToFetch);
   if (response.ok) {
     const jsonResponse = await response.json();
     document.getElementById('meteoiconBrazzaville').src =`http://openweathermap.org/img/wn/${jsonResponse.weather[0].icon}@4x.png`
     document.getElementById('temperatureBrzzaville').innerHTML = `${jsonResponse.main.temp}°C`
     brazzaWeather = jsonResponse.weather[0].main;
     return jsonResponse;
   }
  } catch (error) {
     console.log(error);
   }
 }

 //Brussels forecast

const getForecastBrussels = async () => {
  const city = 'brussels';
  const urlToFetch = `${weatherUrl}${city}&units=metric&appid=${openWeatherKey}&lang=fr`;
   try {
  const response = await fetch(urlToFetch);
   if (response.ok) {
     const jsonResponse = await response.json();
     document.getElementById('meteoiconBrussels').src =`http://openweathermap.org/img/wn/${jsonResponse.weather[0].icon}@4x.png`
     document.getElementById('temperatureBrussels').innerHTML = `${jsonResponse.main.temp}°C`
     brusselsWeather = jsonResponse.weather[0].main;
     return jsonResponse;
   }
  } catch (error) {
     console.log(error);
   }
 }



// Checking the answers of the form
function checkAnswers() {
  checkMontreal();
  checkBrazzaville();
  checkBrussels();
  if ( checkMontreal() === true && checkBrazzaville() === true && checkBrussels() === true) {
    setTimeout( () => {
      displayWinModal();
  }, 1500)
  }

}

// Montreal check

function getSelectValueMontreal() // check which option is selected
{
    let selectedValue = document.getElementById("optionMontreal").value;
    return selectedValue;
}

function checkMontreal() { // check the match between selected option and current weather from API
  let weather = montrealWeather;
  if (weather === "Mist" || weather === "Smoke" || weather ===  "Haze" || weather === "Dust" || weather === "Fog" || weather === "Sand" || weather === "Dust" || weather === "Ash" || weather === "Squall" || weather === "Tornado") {
    weather = "Atmosphere"  //regroup multiple names for fog in "main" in the API cf. https://openweathermap.org/weather-conditions 
  }
  let answer = getSelectValueMontreal();
  if (answer === weather) {
    document.getElementById('Montréal').style.backgroundColor = 'rgba(67, 231, 89, 0.2)';
    return true;
  } else {
    document.getElementById('Montréal').style.backgroundColor = 'rgba(226, 92, 92, 0.2)';
    return false;
  }
	
}

// Brazzaville check

function getSelectValueBrzzaville() // check which option is selected
{
    let selectedValue = document.getElementById("optionBrazzaville").value;
    return selectedValue;
}

function checkBrazzaville() { // check the match between selected option and current weather from API
  let weather = brazzaWeather;
  if (weather === "Mist" || weather === "Smoke" || weather ===  "Haze" || weather === "Dust" || weather === "Fog" || weather === "Sand" || weather === "Dust" || weather === "Ash" || weather === "Squall" || weather === "Tornado") {
    weather = "Atmosphere"  //regroup multiple names for fog in "main" in the API
  }
  let answer = getSelectValueBrzzaville();
  if (answer === weather) {
    document.getElementById('Brazzaville').style.backgroundColor = 'rgba(67, 231, 89, 0.2)';
    return true;
  } else {
    document.getElementById('Brazzaville').style.backgroundColor = 'rgba(226, 92, 92, 0.2)';
    return false;
  }
}

// Brussels check

function getSelectValueBrussels() // check which option is selected
{
    let selectedValue = document.getElementById("optionBrussels").value;
    return selectedValue;
}

function checkBrussels() { // check the match between selected option and current weather from API
  let weather = brusselsWeather;
  if (weather === "Mist" || weather === "Smoke" || weather ===  "Haze" || weather === "Dust" || weather === "Fog" || weather === "Sand" || weather === "Dust" || weather === "Ash" || weather === "Squall" || weather === "Tornado") {
    weather = "Atmosphere"  //regroup multiple names for fog in "main" in the API
  }
  let answer = getSelectValueBrussels();
  if (answer === weather) {
    document.getElementById('Bruxelles').style.backgroundColor = 'rgba(67, 231, 89, 0.2)';
    return true;
  } else {
    document.getElementById('Bruxelles').style.backgroundColor = 'rgba(226, 92, 92, 0.2)';
    return false;

  }
	
}
 
//displaying Modals
 function displayModal() {
  document.querySelector(".révision-modal").style.display= 'flex';
}

function displayWinModal() {
  document.querySelector(".win-modal").style.display= 'flex';
}