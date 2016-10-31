/**
 * 弹窗统一管理模块
 *
 * @author Alexxd
 */
define(['jquery', 'modules/popup/popup', 'Juicer'], function($, popup) {
    var commonPop = {
        //1.登录弹窗
        loginPop: function() {
            var loginTpl =
                '<h2>登录网易云课堂</h2>' +
                '<form action="" autocomplete="on" name="login" method="get">' +
                '<input id="J_uid" type="text" autofocus name="用户名" required="required" maxlength="20" value="">' +
                '<input id="J_pwd" type="password" name="密码" required="required" maxlength="20" value="">' +
                '</form>' +
                '<button type="submit" id="J_submit">登录</button>';

            var opt = {
                width:'386px',
                height:'288px',
                content: loginTpl,
                type:'popup-login'
            };
            popup.init(opt);
        }
    };
    return commonPop;
});
