$(document).ready(function () {
    $("#btn").click(function () {
        $("#hs").html("Hey you clicked me! now <mark> Lorem </mark> is Marked");
    });
});
$(document).ready(function () {
    $("#btn2").click(function () {
        $("#hs").text($("#hs").attr("id"))
    });
});



$(document).ready(function () {
    $("#btn3").click(function () {
        $("#hs").text($("#input").val());
    });
});
