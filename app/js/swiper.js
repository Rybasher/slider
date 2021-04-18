import { Swiper, Controller, Pagination } from "swiper";

Swiper.use([Controller, Pagination]);

const swiperImg = new Swiper('.slider-image', {
	// Optional parameters
	direction: 'horizontal',
	speed: 2000,
	pagination: {

	}
	// loop: true,
});
const swiperText = new Swiper('.slider-text', {
	// Optional parameters
	direction: 'horizontal',
	speed: 2000
	// loop: true,
});

swiperImg.controller.control = swiperText;
swiperText.controller.control = swiperImg;