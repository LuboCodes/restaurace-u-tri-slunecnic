$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 1) {
            $(".top-bar").addClass("header-background");
        } else {
           $(".top-bar").removeClass("header-background");
        }
    });
});