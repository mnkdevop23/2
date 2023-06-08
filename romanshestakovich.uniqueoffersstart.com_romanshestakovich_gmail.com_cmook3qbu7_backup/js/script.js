$(document).ready(function () {

    if ($(window).scrollTop() > 105) {
        $(".floating-menu").fadeIn('slow');
    }

    $(window).scroll(function (event) {
        if ($(this).scrollTop() > 105) {
            $(".floating-menu").fadeIn('slow');
            return false;
        } else {
            $(".floating-menu").fadeOut("slow");
        }
    });

    let page = $('html, body');
    $('.next-btn').click(function () {
        page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 100
        }, 600);
        return false;
    });

    if ($('.reviews__list').length > 0) {
        console.log($('.reviews__list').length);
        $('.reviews__list').slick({
            prevArrow: '<img src="../vid_img/arrow-slider.svg" class="arrow arrow-prev" alt="arrow">',
            nextArrow: '<img src="../vid_img/arrow-slider.svg" class="arrow arrow-next" alt="arrow">',
            dots: true,
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            unslick: true,
            infinite: false,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        unslick: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    $(".close-link-form").click(function (e) {
        e.preventDefault();
        $(".form-popup").fadeOut("slow");
    });

    $(".download-button").click(function () {
        $(".form-popup").fadeIn("slow");
    });

    $(".popup-close").click(function (event) {
        $(".popup-ver").fadeOut("slow");
    });
});
