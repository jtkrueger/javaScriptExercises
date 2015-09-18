//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately
var $canvas = $("canvas");
var color = $(".selected").css("background-color");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

//When clicking on control list items
$(".controls").on("click", "li", function () {
    $(this).siblings().removeClass("selected");
    $(this).addClass("selected");
    color = $(this).css("background-color");
    console.log(color);
});


//When add color is pressed
$("#revealColorSelect").click(function () {
    changeColor();
    $("#colorSelect").toggle();
});


//have "#newcolor" respond to color sliders
function changeColor() {
    var r = $("#red").val();
    var g = $("#green").val();
    var b = $("#blue").val();
    $("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}


//When color sliders change
$(".sliders input[type=range]").on("input",changeColor);

//When add color is pressed
$("#addNewColor").click(function () {
    //append the color to the controls
    var $newColor = $("<li></li>");
    $newColor.css("background-color", $("#newColor").css("background-color"));
    $(".controls ul").append($newColor);

    //select new color
    $newColor.click();
});

//On mouse event on the canvas
$canvas.mousedown(function (e) {
    lastEvent = e;
    mouseDown = true;
    //Draw lines
}).mousemove(function (e) {
    if(mouseDown) {
        context.beginPath();
        context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
        context.lineTo(e.offsetX, e.offsetY);
        context.strokeStyle = color;
        context.stroke();
        lastEvent = e;
    }
}).mouseup(function () {
    mouseDown = false;
}).mouseleave(function () {
    $canvas.mouseup();
});




