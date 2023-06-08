
  $('.paysystems__carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    autoplaySpeed: 800,
    loop:true,
    nav: false,
    autoWidth:true,
    dots: false,
    responsive:{
      0:{
          items:1,
      },
      575:{
          center: true,
          items: 1,
          nav: false
      },
      766:{
          center: true,
          items: 4,
          nav: false
      },
      992:{
          dots: false,
          nav: false
      },
      1200:{
          dots: false,
          nav: false,
      }
    }
  });

  var swiper = new Swiper('.swiper-container', {
    centeredSlides: true,
    // spaceBetween: 30,
    // width: 1600,
    roundLengths: true,
    loop: true,
    autoplay: {
    delay: 2000,
  },
    slidesPerView: 5,
     // Responsive breakpoints
     breakpoints: {
    // when window width is <= 1400px
	    // 1500: {
      //   slidesPerView: 6
	    // },
	  // when window width is <= 1200px
	    1200: {
	      slidesPerView: 5
	    },
	 	// when window width is <= 991px
	    991: {
	      slidesPerView: 4
	    },
	 	// when window width is <= 767px
	    767: {
	      slidesPerView: 3
	    },
	    // when window width is <= 480px
	    480: {
	      slidesPerView: 1
		},
    // when window width is <= 320px
      320: {
        slidesPerView: 1.5,
        spaceBetween: 30,
        // centeredSlides: false,
        // width: 270
		}
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });



    


