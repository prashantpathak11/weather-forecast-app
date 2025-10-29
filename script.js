async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = "e6c3994adc97a7ffb3d4969a471dede2"; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
        document.getElementById('result').innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <p>🌡️ Temperature: ${data.main.temp}°C</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>🌥️ Condition: ${data.weather[0].description}</p>
        `;
    } else {
        document.getElementById('result').innerHTML = `<p>City not found!</p>`;
    }
}
