
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
            $("#home-list").animate({opacity: '1'}, 1000);
        }
        if ($(window).scrollTop() > 900) {
            $("#home-antion-left1").animate({left: '200%'},800,function () {
                $("#home-type-txt1").animate({left: '132px'},"slow",function () {
                    $("#home-type-txt1 > p").addClass('active');
                });
            })
        }
        if ($(window).scrollTop() > 1600) {
            $("#home-antion-left2").animate({left: '200%'},800,function () {
                $("#home-type-txt2").animate({left: '132px'},"slow",function () {
                    $("#home-type-txt2 > p").addClass('active');
                });
            })

        }
        if ($(window).scrollTop() > 2300) {
            $("#home-antion-left3").animate({left: '200%'},800,function () {
                $("#home-type-txt3").animate({left: '132px'},"slow",function () {
                    $("#home-type-txt3 > p").addClass('active');
                });
            })

        }
        if ($(window).scrollTop() > 3000) {
            $("#home-antion-left4").animate({left: '200%'},800,function () {
                $("#home-type-txt4").animate({left: '132px'},"slow",function () {
                    $("#home-type-txt4 > p").addClass('active');
                });
            })

        }
        if ($(window).scrollTop() > 3500) {
            $("#home-antion-left5").animate({left: '200%'},800,function () {
                $("#home-type-txt5").animate({left: '132px'},"slow",function () {
                    $("#home-type-txt5 > p").addClass('active');
                });
            })

        }
        if ($(window).scrollTop() > 4000) {
            $("#home-cooperation-name").animate({left: '120px'},"slow");
            $("#home-cooperation-btn").animate({right: '120px'}, "slow");
        }
    })
});