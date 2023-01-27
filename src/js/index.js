// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { setName, setNumbers, setThings } from './print-title.js';

const buttonsElement = document.getElementById('buttons');

buttonsElement.addEventListener('click', ev => {
  if (ev.target.dataset.item === 'name') {
    setName();
  } else if (ev.target.dataset.item === 'number') {
    setNumbers();
  } else if (ev.target.dataset.item === 'thing') {
    setThings();
  }
});
