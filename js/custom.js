$(function () {
    $(window).on('scroll', function () {
        const sct = $(window).scrollTop();
        if (sct > 200) {
            $('.totop_btn').addClass('on')
        } else {
            $('.totop_btn').removeClass('on')
        }
    })

    $('.main_slide .slide_box').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        pauseOnHover: false,
    });

    $('.main_slide .slide_box').on('afterChange', function (e, s, c) {
        $('.main_slide .slide_dots li').removeClass('on');
        $('.main_slide .slide_dots li').eq(c).addClass('on');
    })

    $('.main_slide .slide_dots li a').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).parent().index();
        $('.main_slide .slide_box').slick('slickGoTo', idx)
    })

    $('.notice_con .left_news .tab_menu li a').on('click', function (e) {
        e.preventDefault();
        $('.notice_con .left_news .tab_menu li').removeClass('on');
        $('.notice_con .left_news .tab_con>ul').removeClass('on');
        $(this).parent().addClass('on');

        let idx = $(this).parent().index();
        $('.notice_con .left_news .tab_con>ul').eq(idx).addClass('on')
    })

    $('.main_notice .right_sns .sns_slide').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: false,
    })

    $('.totop_btn').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    })
})