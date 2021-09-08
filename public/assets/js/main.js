(function ($) {
	"use strict";

	$(window).on('load', function () {
		//$('#preloader').delay(350).fadeOut('slow');
		$('body').delay(350).css({ 'overflow': 'visible' });
	});

	$(document).ready(function () {
		// Swiper: Slider
		new Swiper('.swiper-container', {
			autoPlay: true,
			loop: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
				bulletActiveClass: 'active'
			},
			slidesPerView: 1,
			paginationClickable: true,
			spaceBetween: 0,
			breakpoints: {
				1920: {
					slidesPerView: 1,
					spaceBetween: 0
				},
				1028: {
					slidesPerView: 1,
					spaceBetween: 0
				},
				480: {
					slidesPerView: 1,
					spaceBetween: 0
				}
			}
		});
	});


})(jQuery);