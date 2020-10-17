$(function () {
    'use strict';

    var windo = $(window);

    /*SCROLLSPY JS*/
    $('body').scrollspy({
        target: '#main-nav'
    });

    /*SEARCH BOX JS*/
    $(".search-icon").on('click', function () {
        $(".search-bar").fadeIn(1000);
    });

    /* STICKY NAV BAR BG HIDE & SHOW JS */
    windo.on('scroll', function () {
        var scroltop = windo.scrollTop();
        if (scroltop > 100) {
            $('.custom_nav').addClass('stiky');
        } else {
            $('.custom_nav').removeClass('stiky');
        }
    });

    /* SLIDER SLICK JS */
    $('.slide_active').slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        speed: 1000,
        fade: true,
        infinite: true,
        arrows: false,
        dots: true,
        autoplay: true,
        cssEase: 'linear'
    });

    /* SERVICES PART JS */
    $('.service_slider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
          ]
    });

    /* TEAM PART JS */
    $('.team_slider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
          ]
    });

    /* TESIMONIALL JS */
    $('.testimonial_slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
          ]
    });

    /* PRICING SLIDER JS */
    $('.pricing-slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: '.pricing_arrow_right',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
          ]
    });

    /* SMOOTHLY WINDOW SCROLL JS */
    $('a[href*="#"]:not([href="#').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    // SCROLL TO TOP JS
    windo.scroll(function () {
        var windowscroll = windo.scrollTop();

        if (windowscroll > 200) {
            $('#arrow-up').fadeIn(1000);
        } else {
            $('#arrow-up').fadeOut(1000);
        }
    });
    $('#arrow-up').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 600)
    });
    /* COUNTER UP JS */
    $('.counting').counterUp({
        delay: 30,
        time: 3000,
    });

    /* ACCORDION JS */

    $('.ziehharmonika').ziehharmonika({
        collapsible: true,
        prefix: '',
    });

    /* WOW JS */
    new WOW().init();

})
