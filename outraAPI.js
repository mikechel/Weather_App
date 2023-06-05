const headers = {'X-Api-Key': 'SHX9KQN/JjKilOwfYlzB/Q==Vk9aYspDDX6NpNwA'}

const apiUrl = 'https://api.api-ninjas.com/v1/weather?city=london';

async function chackWeather(){
  const response = await fetch(apiUrl,{
    headers : headers
  });
  
  const data = await response.json();

  console.log(data);
}
chackWeather(); 