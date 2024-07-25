import './index.html';
import './index.scss';

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
