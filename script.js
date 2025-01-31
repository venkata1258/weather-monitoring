const weatherForm = document.getElementById('weatherForm');
const weatherResult = document.getElementById('weatherResult');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = document.getElementById('city').value;
    const unit = document.getElementById('unit').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fc955a604ad4729023ff9753d3be186f&units=${unit === 'C' ? 'metric' : 'standard'}`)
        .then(response => response.json())
        .then(data => {
            const weatherHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp} ${unit === 'C' ? '°C' : '°F'}</p>
                <p>Weather Condition: ${data.weather[0].main}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
            weatherResult.innerHTML = weatherHTML;
        })
        .catch(error => console.error(error));
});