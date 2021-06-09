 //时间
 window.onload = function () {
    //每1秒刷新时间
    setInterval("NowTime()", 1000);
}
function NowTime() {
    //获取年月日
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var day = time.getDate();

    //获取时分秒
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();

    //检查是否小于10
    h = check(h);
    m = check(m);
    s = check(s);
    document.querySelector(".time").innerHTML = +year + "/" + month + "/" + day + "  " + h + ":" + m + ":" + s;
}
//时间数字小于10，则在之前加个“0”补位。
function check(i) {
    var num;
    i < 10 ? num = "0" + i : num = i;
    return num;
}

//交互
var time1 = new Date();
document.querySelector('.btn1').onclick = function () {
    document.querySelector("#f2").setAttribute('src', './zz.jpg')
    document.querySelector(".tx").innerHTML = '姓名：王丹丽<br>';

    var year = time1.getFullYear();
    var month = time1.getMonth() + 1;
    var day = time1.getDate();

    //获取时分秒
    var h = time1.getHours();
    var m = time1.getMinutes();
    var s = time1.getSeconds();

    //检查是否小于10
    h = check(h);
    m = check(m);
    s = check(s);
    document.querySelectorAll(".tx")[5].innerHTML = '出入时间：'+year + "年" + month + "月" + day + "日  " + "09:00" + "至" + year + "年" + month + "月" + day + "日"+'22:30';
}
//切换时间
document.querySelector('.btn2').onclick = function () {
    document.querySelector("#f2").setAttribute('src', './touxiang.jpg')
    document.querySelector(".tx").innerHTML = '姓名：陈浩<br>';
}
//动画
setTimeout(function () {
    document.getElementById("fl").style.height = "100px";
    document.getElementById("fl").style.width = "100px";
    //    document.getElementById("f3").style.height="100px";
    //    document.getElementById("f3").style.width="100px";
}, 0)
setTimeout(function () {
    document.getElementById("fl").style.height = "125px";
    document.getElementById("fl").style.width = "125px";
    //    document.getElementById("f3").style.height="125px";
    //    document.getElementById("f3").style.width="125px";
}, 250)
setTimeout(function () {
    document.getElementById("fl").style.height = "150px";
    document.getElementById("fl").style.width = "150px";
    //    document.getElementById("f3").style.height="150px";
    //    document.getElementById("f3").style.width="150px";
}, 500)
setTimeout(function () {
    document.getElementById("fl").style.height = "125px";
    document.getElementById("fl").style.width = "125px";
    //    document.getElementById("f3").style.height="125px";
    //    document.getElementById("f3").style.width="125px";
}, 750)
setTimeout(function () {
    document.getElementById("fl").style.height = "100px";
    document.getElementById("fl").style.width = "100px";
    //    document.getElementById("f3").style.height="100px";
    //    document.getElementById("f3").style.width="100px";
}, 1000)

setInterval(function () {
    setTimeout(function () {
        document.getElementById("fl").style.height = "100px";
        document.getElementById("fl").style.width = "100px";
        //    document.getElementById("f3").style.height="100px";
        //    document.getElementById("f3").style.width="100px";
    }, 0)
    setTimeout(function () {
        document.getElementById("fl").style.height = "125px";
        document.getElementById("fl").style.width = "125px";
        //    document.getElementById("f3").style.height="125px";
        //    document.getElementById("f3").style.width="125px";
    }, 250)
    setTimeout(function () {
        document.getElementById("fl").style.height = "150px";
        document.getElementById("fl").style.width = "150px";
        //    document.getElementById("f3").style.height="150px";
        //    document.getElementById("f3").style.width="150px";
    }, 500)
    setTimeout(function () {
        document.getElementById("fl").style.height = "125px";
        document.getElementById("fl").style.width = "125px";
        //    document.getElementById("f3").style.height="125px";
        //    document.getElementById("f3").style.width="125px";
    }, 750)
    setTimeout(function () {
        document.getElementById("fl").style.height = "100px";
        document.getElementById("fl").style.width = "100px";
        //    document.getElementById("f3").style.height="100px";
        //    document.getElementById("f3").style.width="100px";
    }, 1000)
}, 1000)
