import { DESTINY_ITEMS } from './consts.js';

const titleElement = document.getElementById('destiny-title');

let nameRandom;
let numberRandom;
let thungsRandom;

const randomNumber = number => {
  return Math.floor(Math.random() * number);
};

const printTitle = data => {};

const setName = () => {
  const arrayNumbers = Object.values(DESTINY_ITEMS)[0];
  const random = randomNumber(arrayNumbers.length);
};
const setNumbers = () => {};
const setThings = () => {};

export { setName, setNumbers, setThings };
