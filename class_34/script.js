$(document).ready(function() {
    $("#hw").click(function() {
        $("#hw").animate({top: '500px',});
        $("#hw").animate({left : '500px',}).fadeOut("slow");
        
    });
});

$(document).ready(function() {
    $("#hd").click(function() {
        $("#show").fadeIn("slow");
    })
});


$(document).ready(function() {
    $("#blue").click(function() {
        $(this).css("background-color", "yellow");

    });
});