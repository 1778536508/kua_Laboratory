
$(document).ready(function(){
    // alert($(window).scrollTop())
    // switch ($(window).scrollTop()) {
    //     case 150:
    //
    //         $("#home-list").animate({opacity: '1', animation: 'all 0.5s'});
    //         break;
    // }
    $(window).scroll(function () {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() > 100) {
            $("#home-list").animate({opacity: '1', animation: 'all 0.5s'});
        }
        if ($(window).scrollTop() > 700) {
            $("#home-type-txt1").animate({left: '132px', animation: 'all 3s'});
        }
        if ($(window).scrollTop() > 1100) {
            $("#home-type-txt2").animate({left: '132px', animation: 'all 3s'});
        }
        if ($(window).scrollTop() > 2100) {
            $("#home-type-txt3").animate({left: '132px', animation: 'all 3s'});
        }
        if ($(window).scrollTop() > 3000) {
            $("#home-type-txt4").animate({left: '132px', animation: 'all 3s'});
        }
        if ($(window).scrollTop() > 3600) {
            $("#home-type-txt5").animate({left: '132px', animation: 'all 3s'});
        }
        if ($(window).scrollTop() > 4700) {
            $("#home-cooperation-name").animate({left: '120px', animation: 'all 4s'});
            $("#home-cooperation-btn").animate({right: '120px', animation: 'all 4s'});
        }
    })
});