window.onload = function () {
    slider();
};

function slider() {
    var obox = document.getElementsByClassName("hs-time-list")[0];
    var onext = document.getElementsByClassName("hs-next-btn")[0];
    var oprev = document.getElementsByClassName("hs-prev-btn")[0];
    var finish = true;

    onext.onclick = function () {
        if (obox.offsetLeft > -345) {
            move(obox.offsetLeft - 115);
        }
    };
    oprev.onclick = function () {
        if (obox.offsetLeft < 0)
            move(obox.offsetLeft + 115);
    };

    function move(iTarget) {
        var timer = null;
        if (finish == false) return;
        timer = setInterval(function () {
            var iSpeed = (iTarget - obox.offsetLeft) / 8;

            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

            if (obox.offsetLeft == iTarget) {
                clearInterval(timer);
            }
            else {
                obox.style.left = obox.offsetLeft + iSpeed + "px";
            }
            if (obox.offsetLeft == iTarget)
                finish = true;
        }, 30);
    }
}

