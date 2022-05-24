
$.get("http://api.openweathermap.org/data/2.5/onecall", {
    APPID: OPEN_WEATHER_APPID,
    lat: 29.4588766,
    lon: -98.7952554,
    units: "imperial"
}).done(function (data) {
    console.log('The entire response:', data);
    //Current Forecast
    console.log('current information: ', data.current)

    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];


    //This gets the date to populate
    function formatTime(timeStamp) {
        let dateTime = new Date(timeStamp * 1000);
        let year = dateTime.getFullYear();
        let month = months[dateTime.getMonth()];
        let day = dateTime.getDate();
        let formattedDateTime = year + " " + month + " " + day;
        return formattedDateTime;
    }

    // 5 Day Forecast
    data.daily.forEach(function (dailyForecast, index) {
        if (index < 5) {
            $('#weeklyForecast').append(
                '<div class="col">' +
                '<div class="card">' +
                '<p class="card-header d-flex justify-content-center">' + formatTime(dailyForecast.dt) + '</p' +
                '<div class="card-body">' +
                '<p class="card-text d-flex justify-content-center">' + dailyForecast.temp.max + "/ " + dailyForecast.temp.min + '</p>' +
                '<p class="weekly"> Description: ' + dailyForecast.weather[0].description + '</p>' +
                '<p class="weekly"> Humidity: ' + dailyForecast.humidity + '</p>' +
                '<hr>' +
                '<p class="weekly"> Wind: ' + dailyForecast.wind_speed + '</p>' +
                '<hr>' +
                '<p class="weekly"> Pressure: ' + dailyForecast.pressure + '</p>' + '</div>' +
                '</div>' +
                '</div>')
        }
    });
});

mapboxgl.accessToken = MAPBOX_API_KEY;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v9', // style URL
    center: [-98.464252, 29.4252], // starting position [lng, lat]
    zoom: 9 // starting zoom

});
$("#search-btn").on('click', function () {
    var locationSearch = $("#locationSearch").val();
    $("#userSearch").text(locationSearch)

    geocode(locationSearch, MAPBOX_API_KEY).then(function (result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(10);
    });
});







