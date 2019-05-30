$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
        $('.navInnerContent').addClass('list-shrink');
    }
    else {
        $('nav').removeClass('shrink');
        $('.navInnerContent').removeClass('list-shrink');
    }
});