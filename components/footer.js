$(document).ready(function () {
    var footer = `<ul>
                <li>
                    <div class="footer-logo"></div>
                    <div class="footer-Copyright">
                        <p>`+config.footer[0].text+`</p>
                        <p>`+config.footer[1].text+`</p>
                    </div>
                </li>
                <li>
                    <ul>
                        <li>
                            <p class="footer-txt-let">`+config.footer[2].text+`</p>
                            <div class="footer-txt-content">
                                <span>`+config.footer[2].content[0].name+`</span>
                                <p>`+config.footer[2].content[0].value+`</p>
                            </div>
                            <div class="footer-txt-content">
                                <span>`+config.footer[2].content[1].name+`</span>
                                <p>`+config.footer[2].content[1].value+`</p>
                            </div>
                        </li>
                        <li>
                            <p class="footer-txt-hey">`+config.footer[3].text+`</p>
                            <div class="footer-txt-content">
                                <span>`+config.footer[3].content[0].name+`</span>
                                <p>`+config.footer[3].content[0].value+`</p>
                            </div>
                            <div class="footer-txt-content">
                                <span>`+config.footer[3].content[1].name+`</span>
                                <p>`+config.footer[3].content[1].value+`</p>
                            </div>
                        </li>
                        <li>
                            <div class="footer-txt-content active">
                                <span>`+config.footer[4].content[0].name+`</span>
                                <p>`+config.footer[4].content[0].value+`</p>
                            </div> 
                        </li>
                    </ul>
                </li>
                <li>
                    <div class="footer-qrCode"></div>
                </li>
            </ul>`
    $("#footer").html(footer);
})