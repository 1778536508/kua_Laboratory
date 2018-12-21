$(document).ready(function () {

    $('body').css('display', 'none');
// 判断图片加载状况，加载完成后回调
    isImgLoad(function() {
        $('body').css('display', 'block');
        /**
         * banner轮播图
         * @type {a|*}
         */
        var mySwiper = new Swiper('.swiper-container', {
            loop: true,
            // effect : 'fade',
            autoplay: 5000,//可选选项，自动滑动
            prevButton: '.swiper-button-prev',
            nextButton: '.swiper-button-next',
            pagination: '.swiper-pagination',
            paginationType: 'custom',
            keyboardControl: true,         // 键盘操作
            paginationCustomRender: function (swiper, current, total) {
                var iscurrent, istotal;
                current = current < 9 ? '0' + current : current;
                total = total < 9 ? '0' + total : total;
                return current + ' / ' + total;
            },
            onInit: function (swiper1) {    // 初始化回调
                // console.log('swiper1',swiper1.activeIndex)
                $(".swiper-container .swiper-slide").eq(swiper1.activeIndex).addClass('active').siblings().removeClass('active');
            },
            onSlideChangeStart: function (swiper) {      // 每次切换回调
                // console.log('swiper',swiper.activeIndex)
                $(".swiper-container .swiper-slide").eq(swiper.activeIndex).addClass('active').siblings().removeClass('active');
            },
        })


        /**
         * 刷新页面获取分类name
         * @$http
         */
        $http(config.damin.example_name_Url, 1, '', function (res) {
            // console.log('res=->', res);
            var strService = '', strIndustry = '', strSupport = '';
            res.forEach((item, index) => {
                switch (item.flag) {
                    case '1':  //服务分类
                        strService += '<li><a href="javascript:;" data_id="' + item.id + '">' + item.name + '</a></li>';
                        break;
                    case '2':  //行业分类
                        strIndustry += '<li><a href="javascript:;" data_id="' + item.id + '">' + item.name + '</a></li>';
                        break;
                    case '3':  //支持分类
                        strSupport += '<li><a href="javascript:;" data_id="' + item.id + '">' + item.name + '</a></li>';
                        break;
                }
            });
            $("#example-list-type-text-pics-service").html(strService);
            $("#example-list-type-text-pics-industry").html(strIndustry);
            $("#example-list-type-text-pics-support").html(strSupport);


            btnList();
            btnMore();
        });


        /**
         * 参数
         * @type {string}
         */
        var pasmas = '';  // 分类id
        var pageNo = 1;   // 页数
        /**
         * 刷新页面调用接口
         */
        var resmas = '?typeId=' + pasmas + '&pageNo=' + pageNo;
        $http(config.damin.example_value_url, 1, resmas, function (res) {
            openData(res);
        })

        /**
         * 点击分类
         *      展示内容
         */
        function btnList() {
            $("#example-list-type-text li a").click(function () {
                //全部
                if ($(this).attr('data_id')) {
                    $(this).parent().addClass('active').siblings().removeClass('active');
                    $("#example-list-type-text > .example-list-type-text-master li").removeClass('active');
                } else {
                    //子分类
                    $(this).parent().addClass('active');
                    $("#example-list-type-text > .example-list-type-text-pics li").removeClass('active');

                }

                pageNo = 1;   // 页数重置
                var thispasma = [];  //当前点击分类数据初始化
                var thisAud = $("#example-list-type-text li");
                for (var i = 0; i < thisAud.length; i++) {
                    if ($(thisAud[i]).attr('class') == 'active') {
                        // console.log('当前点击的所有分类', $(thisAud[i]).children().attr('data_id'))
                        thispasma.push($(thisAud[i]).children().attr('data_id'));
                    }
                }
                pasmas = thispasma.join(',');
                // console.log('pasmas', pasmas);
                var resmas = '?typeId=' + pasmas + '&pageNo=' + pageNo;
                $http(config.damin.example_value_url, 1, resmas, function (res) {
                    // console.log(res.result);
                    openData(res);
                })
            })
        }
        /**
         * 点击查看更多
         *      展示内容
         */
        function btnMore() {
            $("#example-list-type-buttn").click(function () {
                pageNo++;
                var resmas = '?typeId=' + pasmas + '&pageNo=' + pageNo;
                $http(config.damin.example_value_url, 1, resmas, function (res) {
                    openData(res, 1);
                })
            })
        }
        /**
         * 处理数据
         * @data
         */
        function openData(res, type) {

            var strContent = '';
            if (res.result.length > 0) {
                $("#example-list-type-buttn").css('display', 'block');
                res.result.forEach((v, i) => {
                    strContent += ` <li data_id="` + v.id + `" type="` + v.type + `" data_index="` + i + `" data_list="2">
                                            <img src="` + v.accessPath + `" alt="">
                                            <div class="example-list-type-iamges-text">
                                                <h3>` + v.title + `</h3>
                                                <p>` + v.intro + `</p>
                                            </div>
                                        </li>`
                })
            } else {
                $("#example-list-type-buttn").css('display', 'none');
                strContent = '<div class="nodata"><a href="javascript:;">暂无数据</a></div>'
            }
            if (type) {
                $("#example-list-type-pics").append(strContent);
                // 动画
                createMation();
            } else {
                $("#example-list-type-pics").html(strContent);
                // 动画
                removeMation();
                setTimeout(function () {
                    createMation();
                }, 100);
            }
            btnDetails();
        }
        /**
         * 点击进入详情
         * @param callback
         * @returns {boolean|*}
         */
        function btnDetails() {
            $("#example-list-type-pics li").click(function () {
                window.location.href = "http://" + window.location.host + "/view/details/details.html?id=" + $(this).attr('data_id') + "&list=" + $(this).attr('data_list');
            })
        }
        // 添加动画
        function createMation(callback) {
            $("#example-list-type-iamges li").addClass('active');
            setTimeout(function () {
                $("#example-list-type-iamges .example-list-type-iamges-text").addClass('active');
            }, 500);
            setTimeout(function () {
                $("#example-list-type-iamges .example-list-type-iamges-text").children().addClass('active');
            }, 800)
            return typeof callback == 'function' && callback();
        };
        //解除动画
        function removeMation(callback) {
            $("#example-list-type-iamges li").removeClass('active');
            $("#example-list-type-iamges .example-list-type-iamges-text").removeClass('active');
            $("#example-list-type-iamges .example-list-type-iamges-text").children().removeClass('active');
            return typeof callback == 'function' && callback();
        }
        //刷新页面显示
        if ($(window).scrollTop() > 700) {
            createMation();
        }
        //滚动显示动画
        $(window).scroll(function () {
            if ($(window).scrollTop() > 700) {
                createMation();
            }
        });
    })
})