export function Wodproof_init(){

// ===========BURGER=========
    $(document).ready(function(){

        var $menu = $("#menu");

        $(window).scroll(function(){
            if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
                $menu.fadeOut('fast',function(){
                    $(this).removeClass("default")
                        .addClass("fixed transbg")
                        .fadeIn('fast');
                });
            } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
                $menu.fadeOut('fast',function(){
                    $(this).removeClass("fixed transbg")
                        .addClass("default")
                        .fadeIn('fast');
                });
            }
        });//scroll

        $menu.hover(
            function(){
                if( $(this).hasClass('fixed') ){
                    $(this).removeClass('transbg');
                }
            },
            function(){
                if( $(this).hasClass('fixed') ){
                    $(this).addClass('transbg');
                }
            });//hover
    });//jQuery


    var $xBar = $(".x-bar"),
        $sideNav = $(".side-nav"),
        $menuIcon = $(".menu-icon");
    $menuIcon.click(function() {
        $sideNav.css({
            left: 0
        });
        $menuIcon.fadeOut(5);
        $xBar.css({
            top: 30
        });
    });
    $xBar.click(function() {
        $sideNav.css({
            left: -100 + "%"
        });
        $menuIcon.fadeIn(500);
        $xBar.css({
            top: -30
        });
    });

// ========END Burger========

} /*===END init====*/
