import localStorage from './storage';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const value = {
  input: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
};

const lastState = localStorage.load('theme');
const state = localStorage.load('isChecked');

  if (lastState) {
    value.body.classList.add(lastState);
    value.input.checked = state;
  }

value.input.addEventListener('change', checkCondition);

function checkCondition(e) {
  e.preventDefault();

const stateValue = value.body.classList;
const isChecked = e.target.checked;

  if (isChecked) {
    stateValue.add(Theme.DARK);
    stateValue.remove(Theme.LIGHT);
    localStorage.save('theme', Theme.DARK);
    localStorage.save('isChecked', isChecked);
    return;
  }

stateValue.remove(Theme.DARK);
stateValue.add(Theme.LIGHT);
localStorage.save('theme', Theme.LIGHT);
localStorage.save('isChecked', isChecked);
}
