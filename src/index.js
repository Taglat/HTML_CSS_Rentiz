import './index.html';
import './index.scss';
import Swiper from 'swiper';

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const body = document.body

if (hamburger && nav) {
	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('_active');
		nav.classList.toggle('_active');
		body.classList.toggle('_lock');
	})
}

const filter = document.querySelector('.filter');

if (filter) {
	const items = filter.querySelectorAll('.filter-block');

	items.forEach(item => {
		item.addEventListener('click', event => {
			item.querySelector('.filter-block__dropdown').classList.toggle('_active');
			item.querySelector('.filter-block__icon').classList.toggle('_active')

			if (event.target.classList.contains('filter-block__item')) {
				item.querySelector('.filter-block__value').textContent = event.target.textContent;
			}
		}); 
	})
}

const popularSlider = new Swiper('.popular-slider', {
	spaceBetween: 20,
	slidesPerView: 1,
	breakpoints: {
		992: {
			slidesPerView: 3,
		},
		660: {
			slidesPerView: 2,
		}
	}
});

document.querySelector('.popular-slider-next').addEventListener('click', () => {
    popularSlider.slideNext();
});
document.querySelector('.popular-slider-prev').addEventListener('click', () => {
    popularSlider.slidePrev();
});