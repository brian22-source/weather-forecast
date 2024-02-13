function getWeather() {
    const cityInput = document.getElementById('cityinput');
    const cityOutput = document.getElementById('cityoutput');
    const descriptionOutput = document.getElementById('description');
    const tempOutput = document.getElementById('temp');
    const windOutput = document.getElementById('wind');

    const cityName = cityInput.value;

    if (!cityName) {
        alert('Please enter a city name.');
        return;
    }

    // Replace 'YOUR_OPENWEATHERMAP_API_KEY' with your actual OpenWeatherMap API key
    const apiKey = 'ca0c9a94db78e007ac0e7c32e310a47c';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            cityOutput.innerText = `City: ${data.name}`;
            descriptionOutput.innerText = `Description: ${data.weather[0].description}`;
            tempOutput.innerText = `Temperature: ${data.main.temp}°C`;
            windOutput.innerText = `Wind Speed: ${data.wind.speed} m/s`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data.');
        });
}    