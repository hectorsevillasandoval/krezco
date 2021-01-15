//customSelect('select');
$(document).ready(function() {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        loop: true,
        navigation: true,
        navigationText: [
            "<i class='fa fa-chevron-left' aria-hidden='true'></i>",
            "<i class='fa fa-chevron-right'></i>"
        ],
        itemsDesktop: [1000, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        pagination: true,
        slideSpeed: 1000,
        singleItem: true,
        transitionStyle: "fadeUp",
        autoPlay: true
    });
    // Slick
    $('.hero__js').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplayspeed: 3000
    });
});