/**
 * Created by zach on 7/27/16.
 */
$(window).scroll(function() {
    if ($(document).scrollTop() > 1) {
        $('.navbar').removeClass('page-top');
    } else {
        $('.navbar').addClass('page-top');
    }
});