(function() {
    "use strict"

    $.get("https://api.openweathermap.org/data/2.5/onecall", {
        APPID: OWM_TOKEN,
        lat: 29.4241,
        lon: -98.4936,
        units: "imperial",
        exclude: "minutely,hourly"
    }).done(renderHtml);


    function renderHtml(data) {
        console.log(data);
        var html = "";
        for(var i = 0; i < 5; i += 1) {
            var tempMax = data.daily[i].temp.max;
            var tempMin = data.daily[i].temp.min;
            var description = data.daily[i].weather[0].description;
            var windSpeed = data.daily[i].wind_speed;
            var pressure = data.daily[i].pressure;
            var humidity = data.daily[i].humidity;
            var iconCode = data.daily[i].weather[0].icon;
            var date = data.daily[i].dt;
            var date1 = new Date (date*1000);
            var date2 = date1.toLocaleDateString("en-US");
            html += "<div class='card' style='width: 17rem;'>";
            html += "<div class='card-header text-center'>" + date2 + "</div>";
            html += "<ul class='list-group list-group-flush'>";
            html += "<li class='list-group-item text-center'>" + tempMax + "&#176F" + " / " + tempMin + "&#176F" + "<br>" + "<img src='http://openweathermap.org/img/wn/" + iconCode + ".png'>" ;
            html += "<li class='list-group-item'>" + "Description: " + "<strong>" + description + "</strong>";
            html += "<li class='list-group-item'>" + "Humidity: " + "<strong>" + humidity + "</strong>";
            html += "<li class='list-group-item'>" + "Wind: " + "<strong>" + windSpeed + "</strong>";
            html += "<li class='list-group-item'>" + "Pressure: " + "<strong>" + pressure + "</strong>";
            html += "</ul>";
            html += "</div>";
        }
        $("#weather").html(html);
    }

    mapboxgl.accessToken = MAPBOX_TOKEN;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', //stylesheet location
        center: [-98.4936, 29.4241], //starting position [lng, lat]
        zoom: 9 //starting zoom
    });
    //adding controls
    map.addControl(
        new mapboxgl.NavigationControl())

    //adding draggable marker
    var marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([-98.4936, 29.4241])
        .addTo(map);

    function onDragEnd() {
        var lngLat = marker.getLngLat();
        coordinates.style.display = 'block';
        coordinates.innerHTML =
            'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
    }

    marker.on('dragend', onDragEnd);


    // map.addControl(
    //     new MapboxGeocoder({
    //         accessToken: mapboxgl.accessToken,
    //         mapboxgl: mapboxgl
    //     })
    // );

    // var getValue = $("user-input").val();
    // console.log(getValue);

    // $("input").keyup(function(){
    //     console.log(this.value);
    // });

})();



