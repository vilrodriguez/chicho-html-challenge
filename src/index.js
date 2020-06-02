import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap';
import {
        hideLoginModal,
        showLoginModal,
        getElementPosition
        } from './modal';

window.$ = $;
window.jQuery = $;
window.Popper = Popper;

const showLogin = document.getElementById('openLogin');
const hideLogin = document.getElementById('closemodal');
const modalElement = document.getElementById('modal');
const nodesArray = document.querySelectorAll('.view-button');

showLoginModal(showLogin, modalElement);
hideLoginModal(hideLogin, modalElement);
getElementPosition(nodesArray);

$('[data-toggle="tooltip"]').tooltip();

$(function(){
  $('.edit-button').prop('disabled', true);
});
