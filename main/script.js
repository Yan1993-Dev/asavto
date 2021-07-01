const slider = document.querySelector('.swiper-container');
const slider_one = document.querySelector('.swiper-container_one');
const slider_two = document.querySelector('.swiper-container_two');
const slider_three = document.querySelector('.swiper-container_three');
const slider_four = document.querySelector('.slider-container_four')


let mySwiper = new Swiper(slider, {
	slidesPerView: 1,
	spaceBetween: 10,
	loop: true,
	centerMode: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

let mySwiper_one = new Swiper(slider_one, {
	slidesPerView: 1,
	spaceBetween: 10,
	slideClass: 'swiper-slide_one',
	wrapperClass: 'swiper-wrapper_one',
	loop: true,
	centerMode: true,
	pagination: {
		el: '.swiper-pagination_one',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next_one',
		prevEl: '.swiper-button-prev_one',
	},
})

let mySwiper_two = new Swiper(slider_two, {
	slidesPerView: 1,
	spaceBetween: 10,
	slideClass: 'swiper-slide_two',
	wrapperClass: 'swiper-wrapper_two',
	loop: true,
	pagination: {
		el: '.swiper-pagination_one',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next_two',
		prevEl: '.swiper-button-prev_two',
	},
})

let mySwiper_three = new Swiper(slider_three, {
	slidesPerView: 1,
	spaceBetween: 10,
	slideClass: 'swiper-slide_three',
	wrapperClass: 'swiper-wrapper_three',
	loop: true,
	pagination: {
		el: '.swiper-pagination_one',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next_three',
		prevEl: '.swiper-button-prev_three',
	},
})

let mySwiper_four = new Swiper(slider_four, {
	slidesPerView: 1,
	spaceBetween: 10,
	slideClass: 'swiper-container_four',
	wrapperClass: 'swiper-wrapper_four',
	loop: true,
	centerMode: true,
	pagination: {
		el: '.swiper-pagination_one pag',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next_four',
		prevEl: '.swiper-button-prev_four',
	},
})