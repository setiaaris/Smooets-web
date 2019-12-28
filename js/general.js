///////////SLIDER
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

////////////STICKY
//    $(document).on('scroll',function() {
//        if($(this).scrollTop() > 0) {
//            $('.header .grid-header .gallery').addClass('sticky');
//            $('.header .grid-header .title').addClass('sticky');
//        } else{        
//            $('.header .grid-header .gallery').removeClass('sticky');
//            $('.header .grid-header .title').removeClass('sticky');
//        }
//    })

//////////HOME
$(document).ready(function() {
    setTimeout(function(){
        $('#lottie').fadeOut()
    },6900)
    
    $('nav .my-navbar .menu-bar').click(function() {
        $('nav .my-navbar .menu-bar .nav-toggle #one').toggleClass('on');
        $('nav .my-navbar .menu-bar .nav-toggle #two').toggleClass('on');
        $('nav .my-navbar .menu-bar .nav-toggle #three').toggleClass('on');
        $('nav .menu-overlay .block.b1').toggleClass('active');
        $('nav .menu-overlay .block.b2').toggleClass('active');
        $('nav .menu-overlay .block.b3').toggleClass('active');
        $('nav .menu-overlay .block.b4').toggleClass('active');
        $('nav .menus ul').toggleClass('active');
        $('nav .menus ul li:first-child').toggleClass('active');
        $('nav .menus ul li:nth-child(2)').toggleClass('active');
        $('nav .menus ul li:nth-child(3)').toggleClass('active');
        $('nav .menus ul li:nth-child(4)').toggleClass('active');
        $('nav .nav-footer .company').toggleClass('active');
        $('nav .infos .address').toggleClass('active');
        $('nav .infos .contact').toggleClass('active');
        $('nav .my-navbar .logo svg path').toggleClass('active');
        $('nav .strips .strip').toggleClass('active');
        $('nav .my-navbar .menu-bar .nav-toggle #one').removeClass('hover');
        $('nav .my-navbar .menu-bar .nav-toggle #two').removeClass('hover');
        $('nav .my-navbar .menu-bar .nav-toggle #three').removeClass('hover');
        $('nav .my-navbar .search-bar').toggleClass('menusactive');
        $('nav .nav-footer .sc-down').toggleClass('active');
        $('nav .menu-overlay').toggleClass('active');
        $('nav .menus').toggleClass('active');
        $('nav .infos').toggleClass('active');
        $('nav .strips .strip.three').toggleClass('active');
        $('nav .nav-footer .socmed').toggleClass('active');
        $('nav .nav-footer .socmed svg').toggleClass('active');
    })
    $('nav .menus ul li:first-child').hover(function() {
        $('nav .menus ul li .box-hover.one').addClass('hover');
    })
    $('nav .menus ul li:first-child').mouseleave(function() {
        $('nav .menus ul li .box-hover.one').removeClass('hover');
    })
    $('nav .menus ul li:nth-child(2)').hover(function() {
        $('nav .menus ul li .box-hover.two').addClass('hover');
    })
    $('nav .menus ul li:nth-child(2)').mouseleave(function() {
        $('nav .menus ul li .box-hover.two').removeClass('hover');
    })
    $('nav .menus ul li:nth-child(3)').hover(function() {
        $('nav .menus ul li .box-hover.three').addClass('hover');
    })
    $('nav .menus ul li:nth-child(3)').mouseleave(function() {
        $('nav .menus ul li .box-hover.three').removeClass('hover');
    })
    $('nav .menus ul li:nth-child(4)').hover(function() {
        $('nav .menus ul li .box-hover.four').addClass('hover');
    })
    $('nav .menus ul li:nth-child(4)').mouseleave(function() {
        $('nav .menus ul li .box-hover.four').removeClass('hover');
    })

    $('#button-search').bind('click', () => {

        $('nav .my-navbar .search-bar .search-box input').toggleClass('active');
        $('nav .my-navbar .search-bar').toggleClass('active');
        $('nav .my-navbar .menu-bar').toggleClass('srchactive');
        $('nav .my-navbar .logo').toggleClass('srchactive');
        $('nav .my-navbar .search-bar .search-box .icos .ico-srch').toggleClass('active');
        $('nav .my-navbar .search-bar .search-box .icos .bfr').toggleClass('active');
    })

    $('.header .grid-header .gallery .gallery-next').hover(function() {
        $('.header .grid-header .gallery .top-img img.bgslide').addClass('hvr');
    })
    $('.header .grid-header .gallery .gallery-next').mouseleave(function() {
        $('.header .grid-header .gallery .top-img img.bgslide').removeClass('hvr');
    })

    $('.header .grid-header .gallery .gallery-next').hover(function() {
        $('.header .grid-header .gallery .top-img .caption').addClass('hvr');
    })
    $('.header .grid-header .gallery .gallery-next').mouseleave(function() {
        $('.header .grid-header .gallery .top-img .caption').removeClass('hvr');
    })
});