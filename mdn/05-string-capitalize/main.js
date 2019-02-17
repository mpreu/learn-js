'use strict'

let list = document.querySelector('.output ul');
list.innerHTML = '';
let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for (let i = 0; i < cities.length; i++) {
  let input = cities[i];
  input = input.toLowerCase();
  
  let firstChar = input[0].toUpperCase();
  let result = firstChar + input.slice(1);

  // or:
  // let firstChar = input[0];
  // let result = input.replace(firstChar, firstChar.toUpperCase());

  let listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}