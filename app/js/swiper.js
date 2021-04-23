import { Swiper, Controller, Pagination, Navigation } from "swiper";

Swiper.use([Controller, Pagination, Navigation]);

const swiperImg = new Swiper('.slider-image', {
	// Optional parameters
	direction: 'horizontal',
	speed: 2000,
	pagination: {
		el: ".swiper-pagination-count .total",
		type: "custom",
		renderCustom: function (swiper, current, total) {
			// return current + ' of ' + total;
			let totalRes = `${current}`;
			return totalRes;
		}
	}
	// loop: true,
});
const swiperText = new Swiper('.slider-text', {
	// Optional parameters
	direction: 'horizontal',
	speed: 2000,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		type: "fraction"
	}
	// loop: true,
});

swiperImg.controller.control = swiperText;
swiperText.controller.control = swiperImg;