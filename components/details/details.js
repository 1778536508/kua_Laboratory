$(document).ready(function () {


    // 获取参数
    var pasmas = window.location.href.split('?id=')[1].split('&list=');
    // 默认选项
    // console.log(pasmas[1])
    $('#header-title-pics > li:nth-of-type('+ pasmas[1] +')').addClass('active');
    /**
     * 刷新页面调用内容接口
     * @resmas
     */
    var resmas = '?id=' + pasmas[0];
    $http( config.damin.details, 1, resmas, function (res) {
        openData(res);
    });
    /**
     * 处理数据
     *  @data
     */
    function openData(res) {
        $("#details-title").html(res.title);
        $("#details-content").html(res.content);
        $("#details-pdate").html(res.publishDate);
        $("#details-person").html(res.person);
        $("#details-content img").each(function() {
            $(this).css("width", "100%");
        });
    };



})