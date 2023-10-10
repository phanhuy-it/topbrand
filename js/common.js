$(document).ready(function() {
    "use strict";
    console.log('( •ิཬ•ั ) Hello!!!');
});

$(window).bind('load', function() {
    "use strict";

    var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
    if( windowWidth <= 768 ) {

    } else {
        var welcome = $('#welcome').get(0);
        var parallaxInstance_1 = new Parallax(welcome, {
          relativeInput: true
        });

        var home = $('#home .background').get(0);
        var parallaxInstance_2 = new Parallax(home);

        var customers = $('#customers .background').get(0);
        var parallaxInstance_3 = new Parallax(customers);

        var contact = $('#contact .background').get(0);
        var parallaxInstance_4 = new Parallax(contact);
    }
});

$(window).load(function() {
    "use strict";
    var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();

    if( ($('#home .slider').length > 0) && windowWidth > 768 ) {
        $('#home .slider').slick({
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 4000,
            arrows: false,
            centerMode: false,
            centerPadding: 0,
            pauseOnHover: false,
            pauseOnFocus: false,
            fade: true,
            variableWidth: false,
            draggable: false,
        });
    }

    if( ($('#introduce .slider').length > 0) && windowWidth > 768 ) {
        var introduce_slide = $('#introduce .slider').slick({
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 4000,
            arrows: false,
            centerMode: false,
            centerPadding: 0,
            pauseOnHover: false,
            pauseOnFocus: false,
            fade: true,
            variableWidth: false,
            draggable: false,
        });
        $('#introduce .slider').bind('mousewheel', function(e){
            if(e.originalEvent.wheelDelta < 0) {
                introduce_slide.slick('slickNext');
            }else {
                introduce_slide.slick('slickPrev');
            }
        });
    }

    if( $('#services .slider').length > 0 ) {
        $('#services .slider').slick({
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: false,
            centerMode: false,
            centerPadding: 0,
            pauseOnHover: false,
            pauseOnFocus: false,
            fade: true,
            variableWidth: false,
            draggable: true,
        });
    }
    if( $('#prices .slider').length > 0 ) {
        $('#prices .slider').slick({
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: true,
            centerMode: false,
            centerPadding: '10px',
            pauseOnHover: false,
            pauseOnFocus: false,
            fade: false,
            variableWidth: false,
            draggable: false,
            responsive: [
                {
                    breakpoint: 461,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }
    if( $('#projects .slider').length > 0 ) {
        $('#projects .slider').slick({
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: true,
            centerMode: false,
            centerPadding: '10px',
            pauseOnHover: false,
            pauseOnFocus: false,
            fade: false,
            variableWidth: false,
            draggable: false,
            responsive: [
                {
                    breakpoint: 951,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 461,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }
    if( $('#customers .slider').length > 0 ) {
        var customer_slider = $('#customers .slider').slick({
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 4000,
            arrows: false,
            centerMode: false,
            centerPadding: 0,
            pauseOnHover: false,
            pauseOnFocus: false,
            fade: true,
            variableWidth: false,
            draggable: false
        });
        $('#customers .slider').bind('mousewheel', function(e){
            if(e.originalEvent.wheelDelta < 0) {
                customer_slider.slick('slickNext');
            }else {
                customer_slider.slick('slickPrev');
            }
        });
    }
    if( $('#customers .customer_slider').length > 0 ) {
        $('#customers .customer_slider').slick({
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: true,
            centerMode: false,
            centerPadding: '10px',
            pauseOnHover: false,
            pauseOnFocus: false,
            fade: false,
            variableWidth: false,
            draggable: false,
            responsive: [
                {
                    breakpoint: 951,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 461,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }
});
/*==============END SLIDER================*/

$(document).ready(function() {
	"use strict";
	$('#main_menu a[href^="#"]').click(function() {
        var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
		var id = $(this).attr('href');
        if( windowWidth > 768 ) {
            if ($(id).length && $(this).hasClass('active') === false) {
                $('.screen').removeClass('show');
                $(id).addClass('show');
                $('#main_menu li a').removeClass('active');
                $(this).addClass('active');
                if(id === "#home") {
                    $('#home.action h2 span.ttl').textillate('in');
                    $('#home.action h2 span.ttl').on('inAnimationEnd.tlt', function () {
                        $('#home .button').addClass('action');
                    });
                } else {
                    $('#home .button').removeClass('action');
                }
            }
        } else {
            if ($(id).length && $(id).hasClass('active') === false) {
                $('#main_menu li a').removeClass('active');
                $(this).addClass('active');
            }
        }
	});

    $('a.to-contact').click(function() {
        $('#main_menu a[href="#contact"]').trigger('click');
    });

	$('#welcome .button span').click(function() {
        var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
        if( windowWidth > 768 ) {
            $('#welcome').fadeOut(300);
            $('#home').addClass('action');
            $('#header, #footer').removeClass('start');
            $('#home.action h2 span.ttl').textillate();
            $('#home.action h2 span.ttl').on('end.tlt', function () {
                $('#home .button').addClass('action');
            });
        } else {
            var pos = $('#home').offset().top;
            $('html,body').animate({ 
                scrollTop: pos - 53
            }, 400);
        }
	});
});

//BUTTON CLICK SOUND
$(document).ready(function() {
    "use strict";
    var snd = new Audio("https://topbrandvn.net/wp-content/uploads/2018/07/click.mp3");
    $('.btn-sound').click(function() {
        var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
        if( windowWidth > 768 ) {
            snd.play();
        }
    });
});


//MENU ICON
$(document).ready(function() {
    "use strict";
    $('#menu_icon').click(function() {
        $(this).toggleClass('open');
        $('#main_menu').toggleClass('open');
    });
});

