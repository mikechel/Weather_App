const apiKey = "8930da0426926c71dc6f3416d5f0adcc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=London";

async function chackWeather(){
  const response = await fetch(apiUrl + `&appid=${apiKey}` );
  var data = await response.json();

  console.log(data);
}
chackWeather();