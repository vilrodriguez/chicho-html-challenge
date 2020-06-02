import { iterateNodeList } from './nodelistarray';

export const hideLoginModal = (button, element) => {
	window.addEventListener('click', (event) => {
		if (event.target === button) {
			element.style.display = 'none';
		}
		if (event.target === element) {
			element.style.display = 'none';
		}
	});
};

export const showLoginModal = (button, element) => {
  button.addEventListener('click', () => {
    element.style.display = 'block';
  });
};

export const getElementPosition = (nodeList) => {
  iterateNodeList(nodeList, function (index, value) {
    value.setAttribute('data-toggle', 'tooltip');
    value.setAttribute('title', `Element # ${index + 1}`);
	});
}