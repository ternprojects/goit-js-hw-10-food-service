import './styles.css';
import menu from './menu.json'

const list = document.querySelector('.js_list');
const allLi = menu.map(item => `<li>Name: ${item.name}</li>`).join('');
list.insertAdjacentHTML('beforeend', allLi);

