$(document).ready(function () {
    var footer = `<ul>
                <li>
                    <div class="footer-logo"></div>
                    <div class="footer-Copyright">
                        <p>Copyright © 2018 夸克星实验室</p>
                        <p>京ICP备16065072号-1</p>
                    </div>
                </li>
                <li>
                    <ul>
                        <li>
                            <p class="footer-txt-let">Let’s talk</p>
                            <div class="footer-txt-content">
                                <span>电话</span>
                                <p>+86-21-60746536</p>
                            </div>
                            <div class="footer-txt-content">
                                <span>公关媒体</span>
                                <p>pr@tangux.com</p>
                            </div>
                        </li>
                        <li>
                            <p class="footer-txt-hey">Hey@Krc.ai</p>
                            <div class="footer-txt-content">
                                <span>传真</span>
                                <p>+86-21-60746500</p>
                            </div>
                            <div class="footer-txt-content">
                                <span>简历投递</span>
                                <p>hr@tangux.com</p>
                            </div>
                        </li>
                        <li>
                            <div class="footer-txt-content active">
                                <span>商务合作</span>
                                <p>info@tangux.com</p>
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