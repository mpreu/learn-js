'use strict'

let fullImg = document.querySelector('.full-img');
let displayedImg = document.querySelector('.displayed-img');
let thumbBar = document.querySelector('.thumb-bar');
let overlay = document.querySelector('.overlay');
let button = document.querySelector('.dark');

function createImages() {
    for (let i = 1; i <= 5; i++) {
        let newImage = document.createElement('img');
        newImage.setAttribute('src', 'images/pic' + i + '.jpg');
        newImage.addEventListener('click', clickHandler);
        thumbBar.appendChild(newImage);
    }
}

function clickHandler(e) {
    let src = e.target.getAttribute('src');
    changeImage(src);
}

function changeImage(src) {
    displayedImg.setAttribute('src', src);
}

function buttonHandler() {
    if (button.className === '.dark') {
        darken();
    } else {
        lighten();
    }
}

function darken() {
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    button.className = '.light';
    button.textContent = 'Lighten';
}

function lighten() {
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    button.className = '.dark';
    button.textContent = 'Darken';
}

button.addEventListener('click', buttonHandler);
createImages();