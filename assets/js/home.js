
$(document).ready(function(){

    //文字添加Class
    function textAnsion(dom1, dom2, mo1, mo2, ) {
        var txt1 = dom1;
        var txt2 = dom2;
        var s1 = mo1;
        var s2 = mo2
        for(let i = 1; i <= txt1.length; i++) {
            setTimeout(function () {
                $(txt1).eq(i - 1).addClass('active');
            }, (s1 + (i * 100)))
        }
         for(let i = 1; i <= txt2.length; i++) {
            setTimeout(function () {
                $(txt2).eq(i - 1).addClass('active');
            }, (s2 + (i * 200)))
        }
    }
    // 滚动距离
    $(window).scroll(function () {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() > 100) {
            $("#home-list").animate({opacity: '1'}, 1000, function () {
                textAnsion($(".home-list-pase span"),false,0,0)
            });
        }
        if ($(window).scrollTop() > 500) {
            $("#home-antion-left1").animate({left: '200%'},800,function () {
                $("#home-type-txt1").animate({left: '132px'},200,function () {
                    textAnsion(
                        $("#home-type-txt1 > p:nth-of-type(1) > span"),
                        $("#home-type-txt1 > p:nth-of-type(2) > span"),
                        0, 1000)

                });
            })
        }
        if ($(window).scrollTop() > 1300) {
            $("#home-antion-left2").animate({left: '200%'},800,function () {
                $("#home-type-txt2").animate({left: '132px'},200,function () {
                    // $("#home-type-txt2 > p").addClass('active');
                    textAnsion(
                        $("#home-type-txt2 > p:nth-of-type(1) > span"),
                        $("#home-type-txt2 > p:nth-of-type(2) > span"),
                        0, 1000)
                });
            })

        }
        if ($(window).scrollTop() > 2100) {
            $("#home-antion-left3").animate({left: '200%'},800,function () {
                $("#home-type-txt3").animate({left: '132px'},200,function () {
                    // $("#home-type-txt3 > p").addClass('active');
                    textAnsion(
                        $("#home-type-txt3 > p:nth-of-type(1) > span"),
                        $("#home-type-txt3 > p:nth-of-type(2) > span"),
                        0, 1000)
                });
            })

        }
        if ($(window).scrollTop() > 2900) {
            $("#home-antion-left4").animate({left: '200%'},800,function () {
                $("#home-type-txt4").animate({left: '132px'},200,function () {
                    // $("#home-type-txt4 > p").addClass('active');
                    textAnsion(
                        $("#home-type-txt4 > p:nth-of-type(1) > span"),
                        $("#home-type-txt4 > p:nth-of-type(2) > span"),
                        0, 1000)
                });
            })

        }
        if ($(window).scrollTop() > 3700) {
            $("#home-antion-left5").animate({left: '200%'},800,function () {
                $("#home-type-txt5").animate({left: '132px'},200,function () {
                    // $("#home-type-txt5 > p").addClass('active');
                    textAnsion(
                        $("#home-type-txt5 > p:nth-of-type(1) > span"),
                        $("#home-type-txt5 > p:nth-of-type(2) > span"),
                        0, 1000)
                });
            })

        }
        if ($(window).scrollTop() > 4500) {
            $("#home-cooperation-name").animate({left: '120px'},"slow");
            $("#home-cooperation-btn").animate({right: '120px'}, "slow");
        }
    })
});