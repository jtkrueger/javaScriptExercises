//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);
$overlay.append($caption);

$("body").append($overlay);


$("#imageGallery a").click(function(e){
    e.preventDefault();
    var imageLocation = $(this).attr("href");
    var imageCaption = $(this).children().attr("alt");

    $image.attr("src", imageLocation);
    $caption.text(imageCaption);

    $overlay.show();
});


$overlay.click(function(){
    $overlay.hide();
})










