$(document).ready(function () {
    // 回頁首按鈕滾動
    $("#scroll-to-top").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });

    // navbar的滾動
    // var navHeight = $(".navbar").outerHeight();
    $(".nav-link, .navbar-brand, .header-actions a").on("click", function (e) {
        e.preventDefault();
        var aId = $(this).attr("href");
        $('html,body').animate({ scrollTop: $(aId).offset().top - $(".navbar").outerHeight()}, 'slow');
    });

    // navbar再依定高度後變淺
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(".header").outerHeight()/3*2) {
            $(".navbar").addClass("scrolled-nav");
        }
        else {
            $(".navbar").removeClass("scrolled-nav");
        }
    });
});