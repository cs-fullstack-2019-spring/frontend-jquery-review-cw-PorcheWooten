// Problem 1
// Part1
<!--This first Count all Paragraphs button when clicked, should draw a 3px green border around all the <p> elements in the document, and display an alert box that displays The number ofparagraphs in the document is NUMBER where ``NUMBER``` is number of paragraphs-->
$("button:first").on("click", function () {
    $("p").addClass("button1");
    alert("The number of paragraphs in the document is" + " " + $("p").length + " " + "where" + " " +  $("p").length + " " + "is the number of paragraphs")
});


// Part2
// This second Count all Paragraphs in First DIV button when clicked, should draw a 3px red border around all the <p> elements in the 1st DIV, and display an alert box that displays The number of paragraphs in the First DIV is NUMBER where ``NUMBER``` is number of paragraphs

$("#button2").on("click",function () {
    $("div:first > p").addClass("button2");
    alert("The number of paragraphs in the document is" + " " + $("p").length + " " + "where" + " " +  $("p").length + " " + "is the number of paragraphs")
});



//Part3
// This third Count all Paragraphs in Second DIV button when clicked,  around all the <p> elements in the 2nd DIV, and display an alert box that displays The number of paragraphs in the First DIV is NUMBER where ``NUMBER``` is number of paragraphs
$("#button3").on("click", function () {
  $("div:last > p").addClass("button3");
    alert("The number of paragraphs in the document is" + " " + $("p").length + " " + "where" + " " +  $("p").length + " " + "is the number of paragraphs")
});

// Problem2
// When page initially displayed, the 1st button should be enabled and the 2nd button should be disabled. When the 1st button is clicked, the 2nd button should be enabled,
$("#button5").click(function(){
    $(this).attr("disabled","");
    $("#button4").removeAttr("disabled");

    // and the first button be disabled. Clicking the 2nd button should enable the 1st buttonand disable the 2nd button and so on, alternating between buttons as they are clicked.
});

$("#button4").click(function(){
    $(this).attr("disabled","");
    $("#button5").removeAttr("disabled");

});