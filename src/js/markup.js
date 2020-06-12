import menu from '../data/menu.json';
import menuSet from '../templates/model.hbs';

const list = document.querySelector('.js-menu');
const listSet = menuSet(menu);

list.insertAdjacentHTML('beforeend', listSet);
