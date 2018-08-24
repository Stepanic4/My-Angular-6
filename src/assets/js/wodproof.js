export function Wodproof_init() {

// ===========BURGER=========
    $(document).ready(function () {

        var $menu = $("#menu");

        $(window).scroll(function () {
            if ($(this).scrollTop() > 100 && $menu.hasClass("default")) {
                $menu.fadeOut('fast', function () {
                    $(this).removeClass("default")
                        .addClass("fixed transbg")
                        .fadeIn('fast');
                });
            } else if ($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
                $menu.fadeOut('fast', function () {
                    $(this).removeClass("fixed transbg")
                        .addClass("default")
                        .fadeIn('fast');
                });
            }
        });//scroll

        $menu.hover(
            function () {
                if ($(this).hasClass('fixed')) {
                    $(this).removeClass('transbg');
                }
            },
            function () {
                if ($(this).hasClass('fixed')) {
                    $(this).addClass('transbg');
                }
            });//hover
    });//jQuery


    var $xBar = $(".x-bar"),
        $sideNav = $(".side-nav"),
        $menuIcon = $(".menu-icon");
    $menuIcon.click(function () {
        $sideNav.css({
            left: 0
        });
        $menuIcon.fadeOut(5);
        $xBar.css({
            top: 30
        });
        if ($(window).width() < 767) {
            $sideNav.css({
                left: 0
            });
        }
        if ($(window).width() < 992) {
            $sideNav.css({
                width: 270
            });
        }
    });
    $xBar.click(function () {
        $sideNav.css({
            left: -307
        });
        $menuIcon.fadeIn(500);
        $xBar.css({
            top: -30
        });
        if ($(window).width() < 767) {
            $sideNav.css({
                left: -100 + "%"
            });
        }
        if ($(window).width() < 991 && $(window).width() > 1199) {
            $sideNav.css({
                left: -270
            });
        }
    });
// ========END Burger=======
// ===========INPUT=========
    $(document).ready(function () {
        $('.no-ph input').on('input', function () {
            if ($(this).val() !== "") {
                $(this).siblings('label').addClass('active');
            } else {
                $(this).siblings('label').removeClass('active');
            }
        });
    });

// ========END input========
// ========3D Button========


// =====END 3d button=======
}

