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
    $('.carousel__js').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: block;"><i class="fas fa-arrow-right"></i></button>',
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;"><i class="fas fa-arrow-left"></i></button>',
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }
            
        ]
        
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
if (modal) {
    modal.addEventListener('shown.bs.modal', ev => {
        callingBtn = ev.relatedTarget;
        modalTitle = callingBtn.dataset.title;
        modal.querySelector('.modal-title').innerHTML = modalTitle;
    })

}

const calendarElement = document.getElementById("my-calendar");
if (calendarElement) {

    const myCalendar = new TavoCalendar(calendarElement, {
        // settings here
        range_select: true
    })
}

function krMobileMenu() {
    if (document.querySelector("#mmenu") !== null) {

        const menu = new MmenuLight(
            document.querySelector("#mmenu")
        );


        $title = "Menu"



        const navigator = menu.navigation({
            title: $title
        });

        const drawer = menu.offcanvas();
        // const closeBtn = document.querySelector('#nav-mobile .close-btn');



        // closeBtn.addEventListener('click', (event) => {
        //     event.preventDefault();
        //     drawer.close();
        // });
        document.querySelector('.open-menu')
            .addEventListener('click', (evnt) => {
                evnt.preventDefault();
                drawer.open();

            });
    }

    if (window.matchMedia('(max-width: 992px)').matches) {

        if (document.querySelector("#menu-main-menu") !== null) {

            $("#menu-main-menu a[href^='#']").on("click", function() {
                $(this).parent().click();
            });
        }
    }
}

krMobileMenu();