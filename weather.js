var Humidity = document.getElementById('Humidity');
var Temperature = document.getElementById('Temperature');
var Wind = document.getElementById('Wind');
var Visibility = document.getElementById('Visibility');
var Pressure = document.getElementById('Pressure');
var U = document.getElementById('Uvi');

var AM6 = document.getElementById('am-6');
var AM9 = document.getElementById('am-9');
var AM12 = document.getElementById('am-12');
var AM15 = document.getElementById('am-15');
var AM18 = document.getElementById('am-18');
var AM21 = document.getElementById('am-21');
var AM24 = document.getElementById('am-24');

var x = document.getElementById('Layer_1')
var svg = document.getElementById('svg');
var body = document.getElementById('body');
var clocka = document.getElementById('clock')
var bg = document.getElementById('weather');




function automate() {


    //var chart = document.getElementById('chartContainer')



    var city = document.getElementById('txt').value






    // API SETUP

    /* let weatherStackApi = '10ea464dc61db276973882c7d59badc5'; // Weather Stack API

    let openWeatherApi = '6d055e39ee237af35ca066f35474e9df'; // Open Weather API

    var openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6d055e39ee237af35ca066f35474e9df`;

    var weatherStackUrl = `http://api.weatherstack.com/current?access_key=${weatherStackApi}&query=${Town}`;
*/


   if (city) {
        let apiKey = '10ea464dc61db276973882c7d59badc5';
        let apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

        fetch(apiUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            displayWeather(data);
        })
        .catch(function(error) {
            console.error('Error fetching weather:', error);
        });

        function displayWeather(data) {

            // FATCH DATA FROM database
            var humi = data.current.humidity;
            var temp = data.current.temperature;
            var win = data.current.wind_speed;
            var vis = data.current.visibility;
            var press = data.current.pressure;
            var ui = data.current.uv_index;





            // Display data to HTML
            Humidity.innerHTML = humi
            Temperature.innerHTML = temp
            Wind.innerHTML = win
            Visibility.innerHTML = vis
            Pressure.innerHTML = press
            U.innerHTML = ui

        }

        bg.style.backgroundImage = 'linear-gradient(to bottom, #fff, #5cb3ff)';
        body.style.backgroundImage = 'linear-gradient(to bottom, #fff, #5cb3ff)';
        body.style.backgroundSize = 'cover';
        body.style.backgroundRepeat = 'no-repeat';

        x.style.display = 'block';
        x.style.marginTop = '10%';
        x.style.marginLeft = '10%';
        x.style.height = '80%';
        x.style.width = '80%';


        svg.appendChild(x)
        svg.style.display = 'flex';
        svg.style.backgroundColor = 'transparent';
        svg.style.width = '100%';
        svg.style.height = '190Px';

  }


   setInterval(automate, 60000);

    function getCurrentPositionAndFetchWeather() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                fetchWeatherData(latitude, longitude);
            });
        }
    }


    function fetchWeatherData(latitude, longitude) {
        const apiKey = '6d055e39ee237af35ca066f35474e9df'; // Replace with your actual API key
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=6d055e39ee237af35ca066f35474e9df&units=metric`;

        fetch(apiUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            displayWeatherData(data);
        })
        .catch(function(error) {
            console.error('Error fetching weather:', error);
        });
    }

    function displayWeatherData(data) {

        Temperature.innerHTML = data.main.temp
        Humidity.innerHTML = data.main.humidity
        Wind.innerHTML = data.wind.speed
        Visibility.innerHTML = data.visibility
        Pressure.innerHTML = data.main.pressure
        U.innerHTML = 'X'

    }


    //getCurrentPositionAndFetchWeather();

}