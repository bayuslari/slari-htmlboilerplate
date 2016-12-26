$(document).ready(function() {
    'use strict';
    /* ====================
    1. OWL SLIDER
    =======================*/
    $('.slideshow').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        navSpeed: 1000,
        dots: true,
        dotSpeed: 1000,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    /* ====================
    2. NAVIGATION
    =======================*/

    /* Sticky Header */
    $(function() {

        jQuery(window).scroll(function() {
            var top = jQuery(document).scrollTop();
            if (top > 70) {
                jQuery('body').addClass('sticky-header-on').removeClass('sticky-header-off');
            } else {
                jQuery('body').addClass('sticky-header-off').removeClass('sticky-header-on');
            }
        });
    });

    /* On top Detect */
    $(function() {
        jQuery(window).scroll(function() {
            var top = jQuery(document).scrollTop();
            if (top > 0) {
                jQuery('body').addClass('not-on-top');
            } else {
                jQuery('body').removeClass('not-on-top');
            }
        });
    });
});
