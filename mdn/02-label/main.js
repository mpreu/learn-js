const paragraph = document.querySelector('p');

paragraph.addEventListener('click', function() {
    let name = prompt('Enter new name');

    paragraph.textContent = 'Player 1: ' + name;
})