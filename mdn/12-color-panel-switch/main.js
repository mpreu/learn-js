'use strict'

const nElements = 9;

let list = document.querySelector('ul');

function fillList() {
    for (let i = 0; i < nElements; i++) {
        let element = document.createElement('div');
        element.addEventListener('click', clickHandler);
        list.appendChild(element);
    }    
}

function clickHandler(e) {
    let color1 = Math.floor(Math.random(255)*255);
    let color2 = Math.floor(Math.random(255)*255);
    let color3 = Math.floor(Math.random(255)*255);
    e.target.style.backgroundColor = 'rgb(' + color1 + ',' + color2 + ',' + color3 + ')';
}

fillList();

