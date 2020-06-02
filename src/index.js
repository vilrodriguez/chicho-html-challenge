import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap';

window.$ = $;
window.jQuery = $;
window.Popper = Popper;

const showLogin = document.getElementById('openLogin');
const hideLogin = document.getElementById('closemodal');
const modalElement = document.getElementById('modal');
// const loginContainer = document.getElementById('body');

const showLoginModal = () => {
	showLogin.addEventListener('click', () => {
		modalElement.style.display = 'block';
	});
};

const hideLoginModal = () => {
	window.addEventListener('click', (event) => {
		if (event.target === hideLogin) {
			modalElement.style.display = 'none';
		}
		if (event.target === modalElement) {
			modalElement.style.display = 'none';
		}
	});
};

showLoginModal();
hideLoginModal();
