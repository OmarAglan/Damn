let slideIndex = 0;
const slides = document.getElementsByClassName('carousel-slide');

function showSlides() {
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	slides[slideIndex - 1].style.display = 'block';
	setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

showSlides();
const swiper = new Swiper('.tinyflow-slider', {
	slidesPerView: 1,
	effect: 'fade',
	loop: true,
	autoplay: {
		disableOnInteraction: false
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true
	},
	navigation: {
		nextEl: '[data-slider-arrow="next"]',
		prevEl: '[data-slider-arrow="prev"]'
	},
	on: {
		beforeInit: function (swiper) {
			swiper.el.style.setProperty(
				'--data-speed',
				swiper.el.dataset.speed * 1 || swiper.params.speed
			);
			swiper.params.speed = swiper.el.dataset.speed * 1 || swiper.params.speed;
			swiper.params.autoplay.delay =
				swiper.el.dataset.autoplayDelay * 1 || swiper.params.autoplay.delay;
		},
		autoplayTimeLeft(swiper, time, progress) {
			swiper.navigation.nextEl[0].lastElementChild.style.setProperty(
				'--_progress',
				(1 - progress) * 100
			);
		}
	}
});
