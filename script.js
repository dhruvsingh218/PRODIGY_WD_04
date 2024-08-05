const apiKey = 'YOUR_API_KEY';

async function getWeather() {
    const location = document.getElementById('locationInput').value;
    if (!location) return alert('Please enter a location');
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
    const weatherData = await response.json();

    if (weatherData.cod === '404') {
        alert('Location not found');
        return;
    }

    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
        <div><strong>Location:</strong> ${weatherData.name}, ${weatherData.sys.country}</div>
        <div><strong>Temperature:</strong> ${weatherData.main.temp}°C</div>
        <div><strong>Weather:</strong> ${weatherData.weather[0].description}</div>
        <div><strong>Humidity:</strong> ${weatherData.main.humidity}%</div>
        <div><strong>Wind Speed:</strong> ${weatherData.wind.speed} m/s</div>
    `;
}
