function createParagraph() {
    let paragraph = document.createElement('p');
    paragraph.textContent = 'Button clicked';
    document.body.appendChild(paragraph);
}
const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', createParagraph);
}