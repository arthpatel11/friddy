$(document).ready(function() {
    var clientSplide = new Splide('.payment-splide', {
        type: 'loop',
        arrows: false,
        pagination: false,
        drag: false,
        gap: 30,
        perPage: 6,
        autoScroll: {
            speed: 2,
            pauseOnHover: false,
        },
        breakpoints: {
            1199: {
                perPage: 5,
            },
            991: {
                perPage: 4,
            },
            575: {
                perPage: 3,
            },

        }
    });
    clientSplide.mount(window.splide.Extensions);

});