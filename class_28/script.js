// Lesson 35 exercises
// Hides the h1 element when button is clicked

$(document).ready(function() {
    $("#btn-hide").click(function() {
        $("#hw").hide();
    })
});

// Hides the second p element when mouse is clicked
$(document).ready(function() {
    $("#test2").click(function() {
        $(this).hide();
        alert ("You've clicked and hide the second p element")
    });
});

// Hides the first p element when button is clicked

$(document).ready(function() {
    $("#btn-hide-first").click(function() {
        $("p:first").hide();
    })
});

// Lesson 36 exercises

// Changes the site background color when hovering over the element
$(document).ready(function() {
    $("#ho").hover(function() {
        $(this).css("background-color", "blue");
    })
});

// Added to an empty "h5" element when user is double clicking on the button

$(document).ready(function() {
    $("#db-click").dblclick(function(){
        $("h5").append("You've clicked me twice")
    });
});
// Changes the text color when hovering over the element 
$(document).ready(function() {
    $("h5").on({
        mouseenter: function(){
            $(this).css("color", "red", "font-weight:", "50px");
        },
        mouseleave: function(){
            $(this).css("color", "yellowgreen", "font-weight:", "30px");
        }
    });
});
