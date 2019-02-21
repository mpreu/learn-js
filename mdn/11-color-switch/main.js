'use strict'

let select = document.querySelector('select');
let h1 = document.querySelector('h1');

select.onchange = function() {
    let choice = select.value;
    let color = 'black';

    switch (choice) {
        case 'purple':
            color = 'purple';
            break;
        case 'yellow':
            color = 'yellow';
            break;
    }

    h1.style.color = color;
}

h1.style.color = 'black';