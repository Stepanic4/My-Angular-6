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
// ==============================Preloader===========================

    var M = Math,
        PI = M.PI,
        TWOPI = PI * 2,
        HALFPI = PI / 2,
        canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        width = canvas.width = 350,
        height = canvas.height = 350,
        cx = width / 2,
        cy = height / 2,
        count = 40,
        sizeBase = 0.1,
        sizeDiv = 5,
        tick = 0;

    ctx.translate(cx, cy);

    (function loop() {
        requestAnimationFrame(loop);
        ctx.clearRect(-width / 2, -height / 2, width, height);
        ctx.fillStyle = '#fff';
        var angle = tick / 8,
            radius = -50 + M.sin(tick / 15) * 100,
            size;

        for (var i = 0; i < count; i++) {
            angle += PI / 64;
            radius += i / 30;
            size = sizeBase + i / sizeDiv;

            ctx.beginPath();
            ctx.arc(M.cos(angle) * radius, M.sin(angle) * radius, size, 0, TWOPI, false);
            ctx.fillStyle = 'hsl(200, 70%, 50%)';
            ctx.fill();

            ctx.beginPath();
            ctx.arc(M.cos(angle) * -radius, M.sin(angle) * -radius, size, 0, TWOPI, false);
            ctx.fillStyle = 'hsl(320, 70%, 50%)';
            ctx.fill();

            ctx.beginPath();
            ctx.arc(M.cos(angle + HALFPI) * radius, M.sin(angle + HALFPI) * radius, size, 0, TWOPI, false);
            ctx.fillStyle = 'hsl(60, 70%, 50%)';
            ctx.fill();

            ctx.beginPath();
            ctx.arc(M.cos(angle + HALFPI) * -radius, M.sin(angle + HALFPI) * -radius, size, 0, TWOPI);
            ctx.fillStyle = 'hsl(0, 0%, 100%)';
            ctx.fill();
        }

        tick++;
    })();

    document.getElementById('preloader').appendChild(canvas);

    setTimeout(function () {
        $('#preloader').fadeOut('slow', function () {
        });
    }, 500);
// ============================END Preloader=========================
}

