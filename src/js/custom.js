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

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

$(document).ready(function(){
    var date = new Date();
    var yr = date.getFullYear().toString();
   $("#copy").text("© "+yr+" Crucial Alliance All Rights Reserved");

});