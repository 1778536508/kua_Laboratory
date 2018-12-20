
$(document).ready(function(){


$('body').css('display', 'none');
// 判断图片加载状况，加载完成后回调
isImgLoad(function(){

    $('body').css('display', 'block');





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


    var titleClass = $('#home-title span');
    var s1 = 100;
    for(let i = 1; i <= titleClass.length; i++) {
        setTimeout(function () {
            $('#home-title span:nth-of-type('+ i +')').addClass('active');
        },(s1 + (i * 200)))
    }
    var textClass = $("#home-text span");
    var s2 = 2500;
    for(let i = 1; i <= textClass.length; i++) {
        setTimeout(function () {
            $("#home-text span:nth-of-type("+ i +")").addClass('active');
        }, (s2 + (i * 10)))
    }












});






    var t_img; // 定时器
    var isLoad = true; // 控制变量



    // 判断图片加载的函数
    function isImgLoad(callback){
        // 注意我的图片类名都是cover，因为我只需要处理cover。其它图片可以不管。
        // 查找所有封面图，迭代处理
        $('img').each(function(){
            // 找到为0就将isLoad设为false，并退出each
            if(this.height === 0){
                isLoad = false;
                return false;
            }
        });
        // 为true，没有发现为0的。加载完毕
        if(isLoad){
            clearTimeout(t_img); // 清除定时器
            // 回调函数
            callback();
            // 为false，因为找到了没有加载完成的图，将调用定时器递归
        }else{
            isLoad = true;
            t_img = setTimeout(function(){
                isImgLoad(callback); // 递归扫描
            },500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
        }
    }























});