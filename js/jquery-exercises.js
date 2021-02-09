"use strict"

window.onload = function () {
    alert("Fully loaded");
};
//
// $(document).ready(function () {
//     alert("Page has loaded");
// });
//
// $(document).ready(function () {
//    // alert($("#header-1").html());
//    // var content = $("#header-2").html();
//    // alert(content);
// });
// // can i alert content without having to create a var?
//
// $(document).ready(function () {
//     $(".codeup").css("border", "solid red 1px");
// });
//
// $(document).ready(function () {
//     $("li").css("font-size", "20px" );
//     $("h1").css("background-color", "skyblue");
//     $("p").css("background-color", "skyblue");
//     $("li").css("background-color", "skyblue");
//     $("h1, p, li").css("background-color", "gray");
//     alert($("h1").html());
//     $("h1").each(function () {
//         alert($(this).html())
//
//     });
// });
//
// $(document).ready(function(){
//     $('p').click(function(){
//         $(this).hide();
//     });
// });

    (function (){

        var backgroundColorBlue = function () {
            $(this).css({
                backgroundColor: "lightblue"
            })
        }

        $("h1").click(backgroundColorBlue);

    })();

(function () {

    var fontSizeChange = function () {
        $(this).css({
            fontSize: "18px"
        })
    }

    $("p").dblclick(fontSizeChange);

})();

(function () {

    var textRed = function () {
        $(this).css({
            color: "red"
        })
    }
    var textNormal = function () {
        $(this).css({
            color: ""
        })
    }

    $("li").hover(textRed, textNormal);

})();

