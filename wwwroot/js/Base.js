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

//手機轉橫式跳出警語
$(window).on("deviceorientation resize", function( event ) {
    if (window.matchMedia("(orientation: portrait)").matches) {
        $('.overlay-landscape').removeClass('active');
        $('.overlay-landscape-modal-mobile').removeClass('active');
    }
    if (window.matchMedia("(orientation: landscape)").matches) {
        $('.overlay-landscape').addClass('active');
        $('.overlay-landscape-modal-mobile').addClass('active');
    }
});