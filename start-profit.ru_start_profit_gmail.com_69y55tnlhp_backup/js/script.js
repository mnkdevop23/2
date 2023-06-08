$(document).ready(function () {

    $('a[href="#form"]').on('click', function (e) {
        // e.preventDefault();
        let anchor = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(anchor).offset().top
        }, 600);
    });

})