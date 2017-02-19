/**
 * 弹窗组件
 *
 * @author Alexxd
 */
define(['jquery', 'Juicer'], function($) {
    var popup = {
        //初始化popPanel
        init: function(opt) {
            //先加载弹窗基础样式
            $('head').append('<link rel="stylesheet" href="./modules/popup/allPopupStyle.css"/>');

            var defaults = {
                width: "200px",
                height: "200px",
                content: "xx", //内容模板
                type: "popup-login", //表示不同的弹框类型,主要用来做样式覆盖
                showMaskLayer: true, //显示遮罩层，默认有
                hasClose: true, //是否有关闭图标，默认有
            };

            //用户配置，替换默认配置
            var options = $.extend({},
                defaults, opt);

            //弹窗模板
            var tpl = '<div class=${type} id="J_pop">' +
                            '<div class="popup-basic" style="width:${width};height:${height}">' +
                              '##content' +
                            '{@if hasClose}' +
                            '<a href="javascript:;" class="popup-basic-close"></a>' +
                            '{@/if}' +
                            '</div>' +
                            '{@if showMaskLayer}' +
                            '<div class="popup-basic-masklayer"></div>' +
                            '{@/if}' +
                      '</div>';

            var html = juicer(tpl, options);
            html = html.replace('##content', options.content);

            $('body').append(html).css('display', 'none').fadeIn();
            this._bind(options);
        },
        _bind: function() {
           $('#J_pop').on('click', function(e) {
                if (e.target.className === 'popup-basic-close') {
                    $(this).fadeOut();
                }
            });
        },
        //注销dom
        destory: function() {
            $("#J_pop").fadeOut();
        },
        //3s之后自动销毁弹框
        autoDestory: function(time) {
            var time = time || 3000;

            setTimeout(function() {
                $("#J_pop").fadeOut();

                if (pop.afterDestory) {
                    pop.afterDestory();
                }
            }, time);
        },
        //销毁之后的动作
        afterDestory: null,
    };
    return popup;
});
