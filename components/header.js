$(document).ready(function () {
    var header = `<div class="header-content">
                <div class="header-logo"></div>
                <div class="header-title">
                    <ul id="header-title-pics">
                        <li><a href="`+config.header[0].value+`">`+config.header[0].text+`</a></li>
                        <li><a href="`+config.header[1].value+`">`+config.header[1].text+`</a></li>
                        <li><a href="`+config.header[2].value+`">`+config.header[2].text+`</a></li>
                        <li><a href="`+config.header[3].value+`">`+config.header[3].text+`</a></li>
                        <li><a href="`+config.header[4].value+`">`+config.header[4].text+`</a></li>
                    </ul>
                </div>
            </div>`
$("#header").html(header);
})