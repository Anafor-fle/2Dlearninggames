const openWeatherKey = '1d9d2f2f0eb68e911d3d18f685b1661b';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const cities = ['Brussels', 'Montreal', 'Brazzaville'];
const weather = { }; 
const atmosphere = ["Mist", "Smoke", "Haze","Fog" , "Dust", "Sand",  "Dust", "Ash", "Squall", "Tornado"];

function resetGame() { // called when the page is loaded and when the replay button is clicked
  cities.forEach( city => getForececastbyCity(city));
  cities.forEach( city => resetOptions(city));
  cities.forEach( city => resetColors(city));  
  closeModal()
} 

 //Downloading weather data from the API

 const getForececastbyCity = async (city) => {
  const urlToFetch = `${weatherUrl}${city}&units=metric&appid=${openWeatherKey}&lang=fr`;
  try {
    const response = await fetch(urlToFetch);
     if (response.ok) {
       const jsonResponse = await response.json();
       document.getElementById(`meteoicon${city}`).src =`http://openweathermap.org/img/wn/${jsonResponse.weather[0].icon}@4x.png` //displays weather icon
       document.getElementById(`temperature${city}`).innerHTML = `${jsonResponse.main.temp}°C` //displays temperature
       weather[city] = jsonResponse.weather[0].main;
       return jsonResponse;
      }
    } catch (error) {
      console.log(error);
    }
 }




// Checking the answers of the form
function checkAnswers() {
  let result = true;
  cities.forEach(function(city){
    if (checkAnswerByCity(city) === false) {
      result = false;
  }}); 
  if (result) {
    setTimeout( () => {
      displayWinModal();
  }, 1200)
  }

}

function checkAnswerByCity(city) {
  const cityWeather = weather[city];
  if (atmosphere.includes(cityWeather)) {
    weather = "Atmosphere"  //regroup multiple names for fog in "main" in the API cf. https://openweathermap.org/weather-conditions 
  }
  let selectedValue = document.getElementById(`option${city}`).value;
  if (selectedValue === cityWeather) {
    document.getElementById(city).style.backgroundColor = 'rgba(67, 231, 89, 0.2)';
    return true;
  } else {
    document.getElementById(city).style.backgroundColor = 'rgba(226, 92, 92, 0.2)';
    return false;
  }
}

//displaying Modals
 function displayModal() {
  document.querySelector(".review-modal").style.display= 'flex';
}

function displayWinModal() {
  document.querySelector(".win-modal").style.display= 'flex';
}

//closing Modals
function closeModal() {
  document.querySelector(".win-modal").style.display= 'none';
  document.querySelector(".review-modal").style.display= 'none';
}

//reset game


//resetting colors
function resetColors(city) {
   document.getElementById(city).style.backgroundColor = 'rgb(255, 254, 254, 0.7)';
}

//resetting selected option
function resetOptions(city) {
  let selectedOption = selectedValue = document.getElementById(`option${city}`)
  selectedOption.selectedIndex = 0;
}
