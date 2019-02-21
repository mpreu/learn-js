'use strict'

let select = document.querySelector('select');
let list = document.querySelector('ul');
let h1 = document.querySelector('h1');

select.onchange = function() {
    let choice = select.value;
    let days = 31;

    if (choice === 'february') {
        days = 28;
    } else if (choice === 'april' || choice === 'june' || choice === 'september' || choice === 'november') {
        days = 30;
    }

    createCalendar(days, choice);
}

function createCalendar(days, choice) {
    list.innerHTML = '';
    h1.textContent = captalizeFirstLetter(choice);
    for (let i = 1; i <= days; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = i;
        list.appendChild(listItem);        
    }
}

function captalizeFirstLetter(s) {
    return s.replace(s[0], s[0].toUpperCase())
}

createCalendar(31, 'January');