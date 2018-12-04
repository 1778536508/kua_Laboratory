
$(document).ready(function(){
    $(window).scroll(function () {
        // console.log($(window).scrollTop());
        if ($(window).scrollTop() > 2300) {
            console.log($("#footer"))
            $("#footer").animate({marginLeft:'250px', animation: 'all 0.5s'});
        }
    })
});