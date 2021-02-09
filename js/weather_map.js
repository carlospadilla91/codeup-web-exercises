(function() {
    "use strict"
    // Two ways to query the API:
    //1 With a string

    // $.get("https://api.openweathermap.org/data/2.5/onecall?lat=29.4241&lon=-98.4936&units=imperial&exclude=minutely,hourly&appid=" + OWM_TOKEN)
    //     .done(renderHtml)

    $.get("https://api.openweathermap.org/data/2.5/onecall", {
        APPID: OWM_TOKEN,
        lat: 29.4241,
        lon: -98.4936,
        units: "imperial",
        exclude: "minutely,hourly"
    }).done(renderHtml);


    function renderHtml(data) {
        console.log(data);
        var tempMax = data.daily[0].temp.max;
        var tempMin = data.daily[0].temp.min;
        var description = data.current.weather[0].description;
        var windSpeed = data.current.wind_speed;
        var pressure = data.current.pressure;

        var html = "";
        html += "<span>" + tempMax + "</span>"
        html += " / " + "<span>" + tempMin + "</span>"
        html += "<p>" + "Wind: " + "<strong>" + windSpeed + "</strong>";
        html += "</p>";

        $("#weather").html(html);


        console.log(tempMax);
        console.log(tempMin);
        console.log(description);
        console.log(windSpeed);
        console.log(pressure);
        // data.forEach(function (data) {
        //     let $div = $("<div>").addClass('col-sm-6')
        //
        //     let $h2 = $("<h2>").text(data.timezone);
        //     $div.append([$h2]);
        //     $div.appendTo($("#weather"));
        // })
    }


    // var handlerResponse = function (days) {
    //     var html = "";
    //     days.forEach(function (day) {
    //         html += day.temp;
    //     })
    //     $("#weather").html(html);
    // }

//2 With a string AND OBJECT
// $.get("https://api.openweathermap.org/data/2.5/onecall", {
//     APPID: OWM_TOKEN,
//     lat: 29.4241,
//     lon: -98.4936,
//     units: "imperial",
//     exclude: ["minutely", "hourly",]
// }).done(function(data) {
//     console.log(data);
// });

    // function renderHtmlWithjQuery(items) {
    //     items.forEach(function(item) {
    //         // create the surrounding div
    //         let $div = $('<div>').addClass('col-sm-6')
    //
    //         let $h2 = $('<h2>').text(item.name);
    //         let $descriptionParagraph = $('<p>').text(item.description);
    //         let $priceParagraph = $('<p>').text('Price: $' + item.price);
    //
    //         $div.append([$h2, $descriptionParagraph, $priceParagraph]);
    //         $div.appendTo($('#items'));
    //     });
    // }
})()


