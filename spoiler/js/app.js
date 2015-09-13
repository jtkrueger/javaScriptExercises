//Prevent spoilerphobes from seeing spoilers
//Solution: Hide spoilers and reveal them through user interaction


$(".spoiler span").hide();

$(".spoiler").append("<button>Reveal Spoiler</button>");

$(".spoiler button").click(function() {
    $(this).prev().show();
    $(this).remove();
});
