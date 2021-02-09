"use strict"

function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}

function reverseGeocode(coordinates, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        })
        // to get all the data from the request, comment out the following three lines...
        .then(function(data) {
            return data.features[0].place_name;
        });
}

var restaurants = [
    {
        name: "Eddie V's Prime Seafood",
        address: "1834 N Loop 1604 W, San Antonio, TX 78248",
        description: "Prime Quality Seafood"

    }, {
        name: "Sushi Zushi",
        address: "18720 Stone Oak @ 1604, San Antonio, TX 78258",
        description: "Japanese traditions with Latin American influences"
    }, {
        name: "Chama Gaucha",
        address: "18318 Sonterra Pl, San Antonio, TX 78258",
        description: "Fine Dining Brazilian Steakhouse"
    }, {
        name: "Pappadeaux",
        address: "15715 I-10 West, San Antonio, TX 78257",
        description: "French Quarter inspired Seafood"
    }
]

mapboxgl.accessToken = MAPBOX_TOKEN;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', //stylesheet location
    center: [-98.4936, 29.4241], //starting position [lng, lat]
    zoom: 9 //starting zoom
});

// geocode("San Antonio, TX", mapboxToken).then(function(result) {
//     map.setCenter(result);
//     map.setZoom(9);
// });
//
// map.addControl(new mapboxgl.NavigationControl());
//
// var marker = new mapboxgl.Marker()
//     .setLngLat([-98.520880, 29.607730])
//     .addTo(map);

// var popup = new mapboxgl.Popup({ offset: 25 }).setText(
//     'Construction on the Washington Monument began in 1848.'
// )



// map.on('click', function () {
//     var seafoodPopup = new mapboxgl.Popup()
//         .setHTML("<h3>Eddie V's Prime Seafood</h3>")
//         .addTo(map)
//     marker.setPopup(seafoodPopup);
// });

restaurants.forEach(function (restaurant) {
    geocode(restaurant.address, MAPBOX_TOKEN).then(function (result){

        var popup = new mapboxgl.Popup()
            .setHTML(restaurant.name + "<br>" + restaurant.description);

        new mapboxgl.Marker()
            .setLngLat(result)
            .setPopup(popup)
            .addTo(map);
    });
})


