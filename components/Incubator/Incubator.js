$(document).ready(function () {
    /**
     * 刷新页面获取分类name
     * @$http
     */
    $http(config.damin.incubator_name_url, 1, '', function (res) {
        // console.log(res);
        var strLi = '<li class="active" data_id=""><a href="javascript:;">全部</a></li>';
        res.forEach((item, index) => {
            strLi += '<li data_id="'+ item.id +'"><a href="javascript:;">'+ item.name +'</a></li>'
        })
        $("#Incubator-nov-list-pics").html(strLi);
        

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
     * 刷新页面调用内容接口
     * ../../assets/data/data.json
     *
     */
    var resmas = '?typeId=' + pasmas + '&pageNo=' + pageNo;
    $http( config.damin.incubator_value_url, 1, resmas, function (res) {
        openData(res);
    })

    /**
     * 点击分类
     *      展示内容
     */
    function btnList() {
        $(".Incubator-nov-list > ul > li").click(function () {
            $(this).addClass('active').siblings().removeClass('active');

            pageNo = 1;   // 页数重置
            pasmas = $(this).attr('data_id');  //当前点击分类数据初始化
            console.log('pasmas', pasmas);
            var resmas = '?typeId=' + pasmas + '&pageNo=' + pageNo;
            $http(config.damin.incubator_value_url, 1, resmas, function (res) {
                openData(res);
            })

            //切换选项触发动画
            removeMation();
            setTimeout(function () {
                createMation();
            },100)
        })
    }


    /**
     * 点击查看更多
     *      展示内容
     */
    function btnMore() {
        $("#Incubator-nov-img-buttom").click(function () {
            pageNo++;
            var resmas = '?typeId=' + pasmas + '&pageNo=' + pageNo;
            $http(config.damin.incubator_value_url, 1, resmas, function (res) {
                openData(res, 1);
            })
        })
    }


    /**
     * 处理数据
     * @param callback
     * @returns {boolean|*}
     */
    function openData(res, type) {
        console.log('处理数据',res);
        var strUl = '';
        if (res.result.length > 0) {
            $("#Incubator-nov-img-buttom").css('display','block');
            strUl += '<ul>';
            res.result.forEach(( v, i) => {
                strUl +=  `<li data_id="`+ v.id +`" type="`+ v.type +`" data_index="`+ i +`" data_list="3">
                            <div class="Incubator-nov-img-img">
                                <img src="`+ v.accessPath +`" alt="">
                            </div>
                            <div class="Incubator-nov-img-title">
                                <div class="Incubator-nov-img-text">
                                    <h2>`+ v.title +`</h2>
                                    <p>`+ v.intro +`</p>
                                </div>
                            </div>
                        </li>`
                if(i % 2 == 1) {
                    strUl += '</ul>';
                    if(i+1 != res.result.length) {
                        strUl += '<ul>'
                    }
                }

            })

        } else {
            strUl += '<div class="nodata"><a href="javascript:;">暂无数据</a></div>';
            $("#Incubator-nov-img-buttom").css('display','none')
        }

        if (type) {
            $("#Incubator-nov-img-box").append(strUl);
        } else {
            $("#Incubator-nov-img-box").html(strUl);
        }


        btnDetails();

    }

    /**
     * 点击进入详情
     * @param callback
     * @returns {boolean|*}
     */
    function btnDetails() {
        $("#Incubator-nov-img-box li").click(function () {
            window.location.href = "http://" + window.location.host + "/view/details/details.html?id=" + $(this).attr('data_id') + "&list=" + $(this).attr('data_list');
        })
    }





    // 添加动画
    function createMation(callback) {
        $("#Incubator-nov-img .Incubator-nov-img-img").addClass('active');
        $("#Incubator-nov-img h2").addClass('active');
        $("#Incubator-nov-img p").addClass('active');
        return typeof callback == 'function' && callback();
    };
    //解除动画
    function removeMation(callback) {
        $("#Incubator-nov-img .Incubator-nov-img-img").removeClass('active');
        $("#Incubator-nov-img h2").removeClass('active');
        $("#Incubator-nov-img p").removeClass('active');
        return typeof callback == 'function' && callback();
    }
    //刷新页面显示
    if ($(window).scrollTop() > 1400) {
        createMation();
    }
    //滚动显示动画
    $(window).scroll(function () {
        if ($(window).scrollTop() > 1400) {
            createMation();
        }
    });


    /**
     * logo_  分类
     * @type {a|*}
     */

    function logoList(callback) {
        var strLogo = '';
        config.logoList.forEach((item, index) => {
            strLogo += '<div class="swiper-slide">';
            item.forEach((v, i) => {
                strLogo +=  `<div class="swiper-slide-box">
                                <div><img src="`+ v.imagUrl +`" alt=""></div>
                                <p>`+ v.text +`</p>
                            </div>`
            })
            strLogo += '</div>';
        })
        $("#Incubator-logo").html(strLogo);
        return typeof callback == 'function' && callback();
    }

    /**
     * 回调执行方法
     */
    logoList(function () {
        var mySwiper = new Swiper('.swiper-container', {
            onInit: function(event){
                $('#Incubator-content-list > ul > li').eq(event.activeIndex).addClass('active').siblings().removeClass('active');
            },
            onSlideChangeEnd: function (event) {
                $('#Incubator-content-list > ul > li').eq(event.activeIndex).addClass('active').siblings().removeClass('active');
            }
        })
        $('#Incubator-content-list > ul > li').click(function () {
            $(this).addClass('active').siblings().removeClass('active');
            // console.log($(this).index());
            mySwiper.slideTo($(this).index(), 300, true);
        })
    });

    /**
     * swiper 智能
     */
    var mySwiperType = new Swiper('.swiper-container-content',{
        slidesPerView : 3,
        // slidesPerGroup : 1,
        freeMode : true,
        keyboardControl : true,         // 键盘操作
    })





})