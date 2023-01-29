// build a js script using JQuery to add a toggle botton that changes any page to dark-mode when pressed.
// try your "dark-mode.js" on index1.html, index2.html and index3.html without changing the html files!

$(document).ready(function() {
    $("#btn").click(function() {
        $(this).css("background-color", "black", );
        $(this).css("color", "white");
        $(this).css("border", "1px solid");
        $("body").css("background-color", "black",);
        $("h1").css("color", "white");
        $("h2").css("color", "white");
        $("p").css("color", "white");
        $(this).html("Light Mode 🌕"); 
        });
});


$(document).ready(function() {
    $("html").hover(function() {
        $(this).css("background-color", "black",)

    }, function() {
        $(this).css("background-color", "white",);
    });
});