
/**
 * 公共配置文件
 * @config
 * 分类内容
 * @案例 incubator_name_url
 * @孵化器 incubator_value_url
 * pageNo: 页数
 * typeId: 分类ID   不写为全部

 (这个可以填可以不填，不写查全部)
 */
const apiUrl = "http://101.201.37.50:8282/krc-admin/api/";   // 测试域名 (可修改)
var config = {
    damin: {
        example_name_Url: apiUrl + "exampleTypes",    // 案例分类name接口
        example_value_url: apiUrl + "exampleList",    // 案例分类value接口
        incubator_name_url: apiUrl + "alTypes",      // 孵化器分类name接口
        incubator_value_url: apiUrl + "alList",     // 孵化器分类value接口
        details: apiUrl + "details",   // 详情
    },
    header: {
        0: {text: "首页", value: "/view/home/home.html"},
        1: {text: "案例", value: "/view/example/example.html"},
        2: {text: "K + 孵化器", value: "/view/Incubator/Incubator.html"},
        3: {text: "合作方式", value: "/view/formmode/formmode.html"},
        4: {text: "我们", value: "/view/aboutUs/aboutUs.html"}
    },
    footer: {
        0: {text: "Copyright © 2018 夸克星实验室"},
        1: {text: "京ICP备16065072号-1"},
        2: {text: "Let’s talk",
            content:{
                0: {name: "电话", value: "+86-21-60746536"},
                1: {name: "公关媒体", value: "pr@tangux.com"}
            }},
        3: {text: "Hey@Krc.ai",
            content: {
                0: {name: "传真", value: "+86-21-60746500"},
                1: {name: "简历投递", value: "hr@tangux.com"}
            }},
        4: {text: "",
            content: {
                0: {name: "商务合作", value: "info@tangux.com"},
            }}
    },
    logoList: [
        [
            {imagUrl: '../../assets/images/icon_menu_logo_dark.png', text: '技术'},
            {imagUrl: '../../assets/images/icon_menu_logo_dark.png', text: '技术'},
            {imagUrl: '../../assets/images/icon_menu_logo_dark.png', text: '技术'},
            {imagUrl: '../../assets/images/icon_menu_logo_dark.png', text: '技术'},
            {imagUrl: '../../assets/images/icon_menu_logo_dark.png', text: '技术'}],
        [
            {imagUrl: '../../assets/images/icon_menu_logo_dark.png', text: '资金'},
            {imagUrl: '../../assets/images/icon_menu_logo_dark.png', text: '资金'},
            {imagUrl: '../../assets/images/icon_menu_logo_dark.png', text: '资金'},
            {imagUrl: '../../assets/images/icon_menu_logo_dark.png', text: '资金'},
            {imagUrl: '../../assets/images/icon_menu_logo_dark.png', text: '资金'}],
        [
            {imagUrl: '../../assets/images/icon_menu_logo_dark.png', text: '资源'},
            {imagUrl: '../../assets/images/icon_menu_logo_dark.png', text: '资源'},
            {imagUrl: '../../assets/images/icon_menu_logo_dark.png', text: '资源'},
            {imagUrl: '../../assets/images/icon_menu_logo_dark.png', text: '资源'},
            {imagUrl: '../../assets/images/icon_menu_logo_dark.png', text: '资源'}],
        [
            {imagUrl: '../../assets/images/icon_menu_logo_dark.png', text: '服务'},
            {imagUrl: '../../assets/images/icon_menu_logo_dark.png', text: '服务'},
            {imagUrl: '../../assets/images/icon_menu_logo_dark.png', text: '服务'},
            {imagUrl: '../../assets/images/icon_menu_logo_dark.png', text: '服务'},
            {imagUrl: '../../assets/images/icon_menu_logo_dark.png', text: '服务'}],
        [
            {imagUrl: '../../assets/images/icon_menu_logo_dark.png', text: '导师'},
            {imagUrl: '../../assets/images/icon_menu_logo_dark.png', text: '导师'},
            {imagUrl: '../../assets/images/icon_menu_logo_dark.png', text: '导师'},
            {imagUrl: '../../assets/images/icon_menu_logo_dark.png', text: '导师'},
            {imagUrl: '../../assets/images/icon_menu_logo_dark.png', text: '导师'}],
    ]

};


/**
 * ajax封装
 * @param _url
 * @param _type
 * @param _data
 * @param callback
 */
var $http = function (_url, _type, _data, callback) {
    console.log('pasmas=>', _url, _type, _data);


    if (_type == 1) {
        $.ajax({
            url: _url + _data, //请求的地址
            type: "GET", //请求的方式'GET'或'POST'
            dataType: "json",//设置返回内容的数据类型
            success:function(res){//响应成功后执行的回调函数
                console.log("请求成功=>",res);
                return typeof callback == 'function' && callback(res);
            },
            beforeSend : function(){//请求开始之前触发该事件
            },
            complete : function(){//请求结束之后触发该事件
            },
            error: function(err){//响应失败时执行的错误处理函数,会传三个参数，xhr对象，错误信息，错误类型
                console.log("请求失败=>",err)
                return typeof callback == 'function' && callback(err);
            },

        })
    } else {
        $.ajax({
            url: _url, //请求的地址
            type: "POST", //请求的方式'GET'或'POST'
            data: _data,      //提交的信息
            dataType: "json",//设置返回内容的数据类型
            success:function(res){//响应成功后执行的回调函数
                console.log("请求成功=>",res);
                return typeof callback == 'function' && callback(res);
            },
            beforeSend : function(){//请求开始之前触发该事件
            },
            complete : function(){//请求结束之后触发该事件
            },
            error: function(err){//响应失败时执行的错误处理函数,会传三个参数，xhr对象，错误信息，错误类型
                console.log("请求失败=>",err)
                return typeof callback == 'function' && callback(err);
            },

        })
    }

};
