const API_KEY = 'xx';

const form = document.querySelector('form');
const search = document.querySelector('#search');
const result = document.querySelector('#result');

const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        showWeather(data);
        console.log(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        result.innerHTML = `<h4 id='error'>Error fetching weather data. Please try again later.<h4>`;
    }
};

const showWeather = (data) => {
    if (data.cod === '404') {
        result.innerHTML = `<h4 id='error'>**Enter Correct Name<h4>`;
        return;
    }

    result.innerHTML = `

    <div>
        <div id="w-location">
            <p id="location"><i class='fas fa-map-marker-alt'></i> ${data.name}, ${data.sys.country} </p>
        </div>

        <div>
            <p id="w-date">${cDate}</p>
        </div>
    </div>

        <div id="main-res">
        <div id="w-temp">
            <h1>${Math.round(data.main.temp)}º</h1>
        </div>

        <div id="w-icon">
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather-icon">
            <soan>${data.weather[0].description}</span>
        </div>
        </div>

        <div id="more-info">
            <div id="w-feels-like">
                <h4>Feels Like <br> <span style="color: #F0EDE5"> ${data.main.feels_like}º </span></h4>
            </div>

             <div id="w-humidity">
                <h4>Humidity <br> <span style="color: #F0EDE5"> ${data.main.humidity}% </span></h4>
            </div>

             <div id="w-wind_speed">
                <h4>W Speed <br> <span style="color: #F0EDE5"> ${data.wind.speed} <span style="font-size: 12px">km/h</span> </span></h4>
            </div>
    
        </div>

    `;
};

function currentDate(){
    return cDate = new Date().toDateString();
}

currentDate();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    getWeather(search.value);
});
