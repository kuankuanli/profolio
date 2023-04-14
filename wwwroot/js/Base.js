var LineBtn = document.getElementById("Line-btn");
var WebBtn = document.getElementById("Web-btn");
var APPBtn = document.getElementById("APP-btn");
var ScreenBtn = document.getElementById("Screen-btn");
var TablewareBtn = document.getElementById("Tableware-btn");
var ProductBtn = document.getElementById("Product-btn");
var InviteBtn = document.getElementById("Invite-btn");
var DMBtn = document.getElementById("DM-btn");

function goHome() {
    window.location.assign("../Home.html");
}

//判斷手機方向：

window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
    if (window.orientation === 180 || window.orientation === 0) {
        alert('目前您的螢幕為縱向！');
    }
    if (window.orientation === 90 || window.orientation === -90 ){
        alert('目前您的螢幕為橫向！');
    }
}, false);


