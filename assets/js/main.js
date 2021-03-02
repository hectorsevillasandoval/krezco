//customSelect('select');
$(window).load(function() {
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
    //
    $("#testimonial-slider-2").owlCarousel({
        items: 1,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        pagination: false,
        navigation: true,
        slideSpeed: 1000,
        singleItem: true,
        transitionStyle: "goDown",
        navigationText: ["", ""],
        autoPlay: false
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

    $("#owl-aliados").owlCarousel({

        autoPlay: 3000,
        navigation: true,
        pagination: false,
        loop: true,
        navigationText: [
            "<i class='fa fa-chevron-left' aria-hidden='true'></i>",
            "<i class='fa fa-chevron-right'></i>"
        ],
        items: 5,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]

    });



    //$('.dropdown-toggle').dropdown();
    //$('.collapse').collapse({});

});

window.addEventListener('click', ev => {
    if (ev.target.matches('.edit-button')) {
        ev.preventDefault();
    }
});

// Invoke Modals
let modal = document.getElementById('kr-modal'),
    callingBtn = '',
    modalTitle = '';

modal.addEventListener('shown.bs.modal', ev => {
    callingBtn = ev.relatedTarget;
    modalTitle = callingBtn.dataset.title;
    modal.querySelector('.modal-title').innerHTML = modalTitle;
})