window.onload = function() {


    ajax("http://openweathermap.org/data/2.5/forecast/ daily?id=1814906&appid=b1b15e88fa797225412429c1c50c122a",fnSucc,fnFaild);


    function fnSucc(responseText) {
        var json = JSON.parse(responseText);
    }
    function fnFaild(){
        alert("请求数据失败!");
    }
};

function ajax(url, fnSucc, fnFaild) {
    //1.创建ajax对象
    var oAjax = null;

    if (window.XMLHttpRequest) {
        oAjax = new XMLHttpRequest();
    } else {
        oAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }

    //2.连接服务器
    //open(方法, url, 是否异步)
    oAjax.open('GET', url, true);

    //3.发送请求
    oAjax.send();

    //4.接收返回
    //OnReadyStateChange
    oAjax.onreadystatechange = function() {
        if (oAjax.readyState == 4) {
            if (oAjax.status == 200) {
                fnSucc(oAjax.responseText);
            } else {
                if (fnFaild) {
                    fnFaild();
                }
            }
        }
    };
}
