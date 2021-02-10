"use strict"

let hoverIn = function () {
    $(this).css({
        backgroundColor: "black",
        color: "white"
    });
};

let hoverOut = function () {
    $(this).css({
        backgroundColor: "",
        color: ""
    })
}
//hover usually takes in two parameters
// $('.card').hover(hoverIn, hoverOut);

//toggle class added from html with click
// $('.card').click(function (){
//     $(this).toggleClass("toggleClass");
// });
//selector is all li that are children of class "list-group"
$(".list-group>li").dblclick(function (){
   $(this).text("I GOT DBL CLICKED!");
   $(this).click(function (){
       $(this).text("ahhhhh...better");
   })
});

// GET DATA

// this function is making a new object
// function getInputData() {
//     let first = $("#first").val();
//     let last = $("#last").val();
//     let handleField = $("#handleField").val();
//
//     return {
//         id: 4, first , last, handleField
//     };
// }
// $("#submitBtn").click(function () {
//     console.log(getInputData());
//
// let inputData = getInputData()
//
// // create the elements that match the html
// //     let cellCount = $('tr').first().children().length;
// //
//     let tableRow = $("<tr></tr>");
//
//     let td1 = $("<td></td>").text(inputData.id);
//     let td2 = $("<td></td>").text(inputData.first);
//     let td3 = $("<td></td>").text(inputData.last);
//     let td4 = $("<td></td>").text(inputData.handleField);
//
//     tableRow.append([td1, td2, td3, td4]);
//     tableRow.appendTo($("tbody"));
//
//
//
//     // for(let i = 1; i <= cellCount; i += 1){
//     //     let tableData = $("<td></td>");
//     //     tableRow.append(tableData);
//     // }
//
//
// // inject data into elements
//
// // add elements to the DOM
// });

$("img").click(function (){
    $(this).attr("src", "img/codeup-arrow-copy.png");
    $(this).attr("alt", "codeup");
})

$("#submitBtn").click(function () {
    window.location.replace("https://justscream.baby/");
    // location.reload();
})
