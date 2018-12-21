
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
                0: {name: "电话", value: "+86-010-64332582"},
                1: {name: "商务合作", value: "info@k2star.ai"}
            }},
        3: {text: "Hey@k2star.ai",
            content: {
                0: {name: "微信", value: "NewCoking"},
                1: {name: "简历投递", value: "hr@k2star.ai"}
            }},
        4: {text: "",
            content: {
                0: {name: "BP投递", value: "bp@k2star.ai"},
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
    ],
    aboutBanner: [
        {
            images: '../../assets/images/1.png',
            title: '柳科',
            info: '科技、人文、梦想家',
            content1: 'K² Star（夸克星科技人文实验室）创始人，也是国内用户研究、人机交互、文化互联网跨领域专家。K² Star 旨在通过科技与人文交融与碰撞，寻找下一个十年的趋势型产品。',
            content2: '奇虎 360 前研究、人机交互设计团负责人，众多亿级用户产品创新；小牛电动车前智能产品总监，产品众筹记录全国第 1；联合国教科文非遗大数据平台首席设计师，首届 DIICH 杯设计大赛执行主席；中国国家地理·地道风物前首席产品官；唐硕咨询机构、联想研究院 URC 前研究员；香港大学 ICB 首届杰出校友、南开大学 MBA 导师；香港大学紫荆共创会会长，中关村天使营成员；双鱼座、爱吃辣、铁人三项爱好者。'
        },
        {
            images: '../../assets/images/2.png',
            title: '柳科',
            info: '科技、人文、梦想家',
            content1: 'K² Star（夸克星科技人文实验室）创始人，也是国内用户研究、人机交互、文化互联网跨领域专家。K² Star 旨在通过科技与人文交融与碰撞，寻找下一个十年的趋势型产品。',
            content2: '奇虎 360 前研究、人机交互设计团负责人，众多亿级用户产品创新；小牛电动车前智能产品总监，产品众筹记录全国第 1；联合国教科文非遗大数据平台首席设计师，首届 DIICH 杯设计大赛执行主席；中国国家地理·地道风物前首席产品官；唐硕咨询机构、联想研究院 URC 前研究员；香港大学 ICB 首届杰出校友、南开大学 MBA 导师；香港大学紫荆共创会会长，中关村天使营成员；双鱼座、爱吃辣、铁人三项爱好者。'
        },
        {
            images: '../../assets/images/3.png',
            title: '柳科',
            info: '科技、人文、梦想家',
            content1: 'K² Star（夸克星科技人文实验室）创始人，也是国内用户研究、人机交互、文化互联网跨领域专家。K² Star 旨在通过科技与人文交融与碰撞，寻找下一个十年的趋势型产品。',
            content2: '奇虎 360 前研究、人机交互设计团负责人，众多亿级用户产品创新；小牛电动车前智能产品总监，产品众筹记录全国第 1；联合国教科文非遗大数据平台首席设计师，首届 DIICH 杯设计大赛执行主席；中国国家地理·地道风物前首席产品官；唐硕咨询机构、联想研究院 URC 前研究员；香港大学 ICB 首届杰出校友、南开大学 MBA 导师；香港大学紫荆共创会会长，中关村天使营成员；双鱼座、爱吃辣、铁人三项爱好者。'
        },
        {
            images: '../../assets/images/4.png',
            title: '柳科',
            info: '科技、人文、梦想家',
            content1: 'K² Star（夸克星科技人文实验室）创始人，也是国内用户研究、人机交互、文化互联网跨领域专家。K² Star 旨在通过科技与人文交融与碰撞，寻找下一个十年的趋势型产品。',
            content2: '奇虎 360 前研究、人机交互设计团负责人，众多亿级用户产品创新；小牛电动车前智能产品总监，产品众筹记录全国第 1；联合国教科文非遗大数据平台首席设计师，首届 DIICH 杯设计大赛执行主席；中国国家地理·地道风物前首席产品官；唐硕咨询机构、联想研究院 URC 前研究员；香港大学 ICB 首届杰出校友、南开大学 MBA 导师；香港大学紫荆共创会会长，中关村天使营成员；双鱼座、爱吃辣、铁人三项爱好者。'
        },
        {
            images: '../../assets/images/5.png',
            title: '柳科',
            info: '科技、人文、梦想家',
            content1: 'K² Star（夸克星科技人文实验室）创始人，也是国内用户研究、人机交互、文化互联网跨领域专家。K² Star 旨在通过科技与人文交融与碰撞，寻找下一个十年的趋势型产品。',
            content2: '奇虎 360 前研究、人机交互设计团负责人，众多亿级用户产品创新；小牛电动车前智能产品总监，产品众筹记录全国第 1；联合国教科文非遗大数据平台首席设计师，首届 DIICH 杯设计大赛执行主席；中国国家地理·地道风物前首席产品官；唐硕咨询机构、联想研究院 URC 前研究员；香港大学 ICB 首届杰出校友、南开大学 MBA 导师；香港大学紫荆共创会会长，中关村天使营成员；双鱼座、爱吃辣、铁人三项爱好者。'
        },
    ],
    aboutList:{
        list1: [
            {
                images: '../../assets/images/1.png',
                name: 'Kevin yu',
                info: '前端架构师'
            },
            {
                images: '../../assets/images/2.png',
                name: 'Kevin yu',
                info: '前端架构师'
            },
            {
                images: '../../assets/images/3.png',
                name: 'Kevin yu',
                info: '前端架构师'
            },
            {
                images: '../../assets/images/4.png',
                name: 'Kevin yu',
                info: '前端架构师'
            },
            {
                images: '../../assets/images/5.png',
                name: 'Kevin yu',
                info: '前端架构师'
            },
            {
                images: '../../assets/images/6.png',
                name: 'Kevin yu',
                info: '前端架构师'
            },
        ],
        list2: [
            {
                images: '../../assets/images/7.png',
                name: 'Kevin yu',
                info: '前端架构师'
            },
            {
                images: '../../assets/images/8.png',
                name: 'Kevin yu',
                info: '前端架构师'
            },
            {
                images: '../../assets/images/9.png',
                name: 'Kevin yu',
                info: '前端架构师'
            },
            {
                images: '../../assets/images/10.png',
                name: 'Kevin yu',
                info: '前端架构师'
            },
            {
                images: '../../assets/images/11.png',
                name: 'Kevin yu',
                info: '前端架构师'
            },
            {
                images: '../../assets/images/12.png',
                name: 'Kevin yu',
                info: '前端架构师'
            },
        ],
        list3: [
            {
                images: '../../assets/images/13.png',
                name: 'Kevin yu',
                info: '前端架构师'
            },
            {
                images: '../../assets/images/14.png',
                name: 'Kevin yu',
                info: '前端架构师'
            },
            {
                images: '../../assets/images/15.png',
                name: 'Kevin yu',
                info: '前端架构师'
            },
            {
                images: '../../assets/images/16.png',
                name: 'Kevin yu',
                info: '前端架构师'
            },
            {
                images: '../../assets/images/17.png',
                name: 'Kevin yu',
                info: '前端架构师'
            },
            {
                images: '../../assets/images/18.png',
                name: 'Kevin yu',
                info: '前端架构师'
            },
        ],
    }

};


/**
 * ajax封装
 * @param _url
 * @param _type
 * @param _data
 * @param callback
 */
var $http = function (_url, _type, _data, callback) {
    // console.log('pasmas=>', _url, _type, _data);


    if (_type == 1) {
        $.ajax({
            url: _url + _data, //请求的地址
            type: "GET", //请求的方式'GET'或'POST'
            dataType: "json",//设置返回内容的数据类型
            success:function(res){//响应成功后执行的回调函数
                // console.log("请求成功=>",res);
                return typeof callback == 'function' && callback(res);
            },
            beforeSend : function(){//请求开始之前触发该事件
            },
            complete : function(){//请求结束之后触发该事件
            },
            error: function(err){//响应失败时执行的错误处理函数,会传三个参数，xhr对象，错误信息，错误类型
                // console.log("请求失败=>",err)
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
                // console.log("请求成功=>",res);
                return typeof callback == 'function' && callback(res);
            },
            beforeSend : function(){//请求开始之前触发该事件
            },
            complete : function(){//请求结束之后触发该事件
            },
            error: function(err){//响应失败时执行的错误处理函数,会传三个参数，xhr对象，错误信息，错误类型
                // console.log("请求失败=>",err)
                return typeof callback == 'function' && callback(err);
            },

        })
    }

};


/**
 * 兼容处理
 *  @compatible IE
 */

function isIE() { //ie?
    if (!!window.ActiveXObject || "ActiveXObject" in window) { return true; }
    else { return false; }
}


/**
 * 封装
 *    图片加载完成回调
 */
var t_img; // 定时器
var isLoad = true; // 控制变量
// 判断图片加载的函数
var isImgLoad = function(callback) {
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
};