import tabs from'./modules/tabs';
import cards from './modules/cards';
import timer from './modules/timer';
import modals from './modules/modals';
import forms from './modules/form';
import slider from './modules/slider';
import calc from './modules/calc';
import openModal from './modules/modals';


document.addEventListener('DOMContentLoaded', () => {
    const modalTimer = setTimeout (() => openModal('.modal', modalTimer), 50000);
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    cards();
    timer('.timer', '2021-11-09');
    modals('[data-open]', '.modal', modalTimer);
    forms('form', modalTimer);
    slider({
        slide: '.offer__slide',
        indicaporSelector: '.carousel-indicators',
        dotSelector: '.dot',
        prevArrow: '.offer__slider-prev',
        nextArrow: '.offer__slider-next',
        totalCaunter: '#total',
        currentCaunter: '#current',
    });
    calc();
});


