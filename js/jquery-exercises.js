"use strict"

window.onload = function () {
    alert("Fully loaded");
};

$(document).ready(function () {
    alert("Page has loaded");
});

$(document).ready(function () {
   var contents = $("#header-1").html();
   alert(contents);
   var content = $("#header-2").html();
   alert(content);
});
// can i alert content without having to create a var?

$(document).ready(function () {
    $(".codeup").css("border", "solid red 1px");
});

$(document).ready(function () {
    $("li").css("font-size", "20px" );
    $("h1, p, li").css("background-color", "gray");
    var contents = $("h1").text();
    alert(contents);
});