/*
 *      update by ZhangBy.   2016/5/13
 */

function inputTextChange(text, str) {
    text.onfocus = (function () {
        if (this.value == str) {
            this.value = '';
        }
    });
    text.onblur = (function () {
        if (this.value == '') {
            this.value = str;
        }
    });
}

function clearText() {
    if (!document.getElementsByClassName) return false;

    var text = document.getElementsByClassName('text');
    for (var i = 0; i < text.length; i++) {
        inputTextChange(text[i], 'Search website');
    }
}

function changeTopBanner() {
    if (!document.getElementById) return false;

    var top_banner = document.getElementById('top_banner');
    var ul = top_banner.getElementsByTagName('ul')[0];
    var lis = ul.getElementsByTagName('li');
    var index = 0;

    setInterval(function () {
        if (index >= lis.length) {
            index = 0;
        }
        ul.style.left = -(940 * index) + 'px';
        index++;
    }, 3000);
}

function slideImg() {
    var box = document.getElementsByClassName('slide_box')[0];
    var prev = document.getElementById('btn_prev');
    var next = document.getElementById('btn_next');
    var container = document.getElementsByClassName('item_container')[0];
    var ul_w = 652;
    var page = 2;
    var now = 0;
    var timer = setInterval(auto, 3000);

    function auto() {
        next.onclick();
    }

    next.onclick = function () {
        if (now < page) {
            now++;
        } else {
            now = 0;
            container.style.left = ul_w + 'px';
        }
        scroll(container, 'left', -ul_w * now);
    };

    prev.onclick = function () {
        if (now > 0) {
            now--;
        } else {
            now = 2;
            container.style.left = -ul_w + 'px';
        }
        scroll(container, 'left', -ul_w * now);
    };

    function scroll(obj, attr, target) {
        obj.timer && clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var stop = true;
            var cur = parseInt(obj.style.left);
            var speed = (target - cur) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (target != cur) {
                stop = false;
                obj.style[attr] = speed + cur + 'px';
            }
            if (stop) {
                clearInterval(obj.timer);
                obj.timer = null;
            }
        }, 30);
    }

    box.onmouseover = function () {
        clearInterval(timer);
    };
    box.onmouseout = function () {
        timer = setInterval(auto, 3000);
    };
}

window.onload = (function () {
    clearText();
    changeTopBanner();
    slideImg();
});

