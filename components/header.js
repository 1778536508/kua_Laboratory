$(document).ready(function () {
    var header = `<div class="header-content">
                <div class="header-logo"></div>
                <div class="header-title">
                    <ul id="header-title-pics">
                        <li><a href="/view/home/home.html">首页</a></li>
                        <li><a href="/view/example/example.html">案例</a></li>
                        <li><a href="/view/Incubator/Incubator.html">K + 孵化器</a></li>
                        <li><a href="/view/formmode/formmode.html">合作方式</a></li>
                        <li><a href="javascript:;">我们</a></li>
                    </ul>
                </div>
            </div>`
$("#header").html(header);
})