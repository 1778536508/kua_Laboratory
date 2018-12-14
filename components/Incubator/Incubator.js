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
                openData(res);
            })
        })
    }


    /**
     * 处理数据
     * @param callback
     * @returns {boolean|*}
     */
    function openData(res) {
        console.log('处理数据',res);
        if (res.result.length > 0) {
            var strUl = '<ul>';
            res.result.forEach(( v, i) => {
                strUl +=  `<li data_id="`+ v.id +`" type="`+ v.type +`" data_index="`+ i +`" data_list="3">
                            <div class="Incubator-nov-img-img">
                                <img src="`+ v.accessPath +`" alt="">
                            </div>
                            <div class="Incubator-nov-img-title">
                                <div class="Incubator-nov-img-text">
                                    <h2>`+ v.title +`</h2>
                                    <div>`+ v.content +`</div>
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
            $("#Incubator-nov-img-box").html(strUl);
            btnDetails();
        } else {
            $("#Incubator-nov-img-box").html('<div class="nodata"><a href="javascript:;">抠搜的,就这几条数据! 跟谁俩呢</a></div>');
        }

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
        $("#Incubator-nov-img div").addClass('active');
        return typeof callback == 'function' && callback();
    };
    //解除动画
    function removeMation(callback) {
        $("#Incubator-nov-img .Incubator-nov-img-img").removeClass('active');
        $("#Incubator-nov-img h2").removeClass('active');
        $("#Incubator-nov-img div").removeClass('active');
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



})