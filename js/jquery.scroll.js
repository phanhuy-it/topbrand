// ANCHOR IN PAGE
$(window).bind('load', function() {
    "use strict";
    $(function() {
        $('a[href^="#"]').click(function() {
            if ($($(this).attr('href')).length) {
                var p = $($(this).attr('href')).offset();
                if ($(window).width() > 768) {
                    $('html,body').animate({ scrollTop: p.top - 0 }, 400);
                } else {
                    $('html,body').animate({ scrollTop: p.top - 53 }, 400);
                }

                if( $('#main_menu').hasClass('open') ) {
                    $('#menu_icon').trigger('click');
                }
            }
            return false;
        });
    });
});

// ANCHOR FROM OTHER PAGE
$(window).bind('load', function() {
    "use strict";
    var hash = location.hash;
    if (hash && $(hash).length > 0) {
        var p1 = $(hash).offset();
        if ($(window).width() > 768) {
            $('html,body').animate({ scrollTop: p1.top - 0 }, 400);
        } else {
            $('html,body').animate({ scrollTop: p1.top - 53 }, 400);
        }
    }
});