$(".blog-icon").click(function () {
    var BlogTab = $('.blog');

    if ($(BlogTab).hasClass('open')) {

        $('.glyphicon-remove').css({
            "transform": "rotate(-45deg)",
            "transition": "2s ease-in"
        });

        if ($(window).width() < 480) {
            $(BlogTab).animate({
                "width": "20%",
                "right": "-9999"
            }, 2000);
        }
        else {
            $(BlogTab).animate({
                "right": "-9999"
            }, 2000);
        }
        $(BlogTab).removeClass('open');

        if ($(window).width() < 767) {
            $('.navbar-collapse').collapse('hide');
        }
    }
    else {

        if ($(window).width() < 480) {
            $(BlogTab).animate({
                "width" : "100%",
                "height": "100%",
                "right" : "0"
            }, 1000);
        } else {          
            $(BlogTab).animate({
                "right": "0"
            }, 1000);
        }
        $('.glyphicon-remove').css({
            "transform": "rotate(0deg)",
            "transition": "2s ease-in"
        });
        $(BlogTab).addClass('open'); 
        
        if ($(window).width() < 767) {
            $('.navbar-collapse').collapse('hide');
        }
    }
});